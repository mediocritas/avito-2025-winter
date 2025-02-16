import { test, expect } from '@playwright/test';
import RequestFactory from '../src/factories/request-factory.class';
import AdvertFactory from '../src/factories/advert-factory.class';
import {
  extractAdvertIdFromResponse,
  extractAdvertsFromResponse,
  advertDTOtoAdvert
} from '../src/utils/extract-data';
import { AdvertDTO } from '../src/models/advert.types';

let advert: AdvertDTO;
let advertId: string;
const sellerId : number = parseInt(process.env.SELLER_ID!, 10);

test.describe('POST correct advert and GET it back', () => {

  test.beforeAll('Post correct advert', async ({ }) => {
    advert = AdvertFactory.getCorrectAdvert();
    const postRes = await RequestFactory.postAdvert(advert);
    expect(postRes.status()).toBe(200);
    advertId = (await extractAdvertIdFromResponse(postRes)).status;
  });

  test('check posted advert with GET by id', async () => {
    const getRes = await RequestFactory.getAdvertById(advertId)
    const advertFromServer = await extractAdvertsFromResponse(getRes);
    expect(getRes.status()).toBe(200);
    expect(advertFromServer).toContain(advertDTOtoAdvert(advert, advertId));
  });

  test(`check posted adverts with GET by sellerId ${sellerId}`, async () => {
    const getRes = await RequestFactory.getAdvertsBySeller(sellerId.toString())
    const advertsFromServer = await extractAdvertsFromResponse(getRes);
    expect(getRes.status()).toBe(200);
    advertsFromServer.map(
      (adv) =>
        expect(adv.sellerId, `sellerId is incorrect`)
          .toEqual(sellerId)
    );
  });
})

test.describe('check if advert id is unique', async () => {
  test('POST two correct adverts and compare them', async () => {
    advert = AdvertFactory.getCorrectAdvert();
    const firstAdv = await RequestFactory.postAdvert(advert);
    const secondAdv = await RequestFactory.postAdvert(advert);
    const firstAdvId = (await extractAdvertIdFromResponse(firstAdv)).status;
    const secondAdvId = (await extractAdvertIdFromResponse(secondAdv)).status;
    expect(firstAdvId).not.toEqual(secondAdvId);
  })
})