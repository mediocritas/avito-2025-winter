import { test, expect } from '@playwright/test';
import RequestFactory from '../src/factories/request-factory.class';
import AdvertFactory from '../src/factories/advert-factory.class';
import { faker } from '@faker-js/faker';


test.describe('Negative cases with posting incorrect advert object', () => {

  AdvertFactory.invalidAdvertsWithEmptyFields.forEach(({ name, advert }) =>
    test(`Post request with ${name}`, async ({ }) => {
      const res = await RequestFactory.postAdvert(advert);
      expect(res.status()).toBe(400);
    })
  );

  AdvertFactory.invalidAdvertsWithFieldsAsStrings.forEach(({ name, advert }) =>
    test(`Post request with ${name}`, async ({ }) => {
      const res = await RequestFactory.postAdvert(advert);
      expect(res.status()).toBe(400);
    })
  );

  AdvertFactory.invalidAdvertsWithMissingFields.forEach(({ name, advert }) =>
    test(`Post request with ${name}`, async ({ }) => {
      const res = await RequestFactory.postAdvert(advert);
      expect(res.status()).toBe(500);
    })
  );

  AdvertFactory.invalidAdvertsWithLargeFields.forEach(({ name, advert }) =>
    test(`Post request with ${name}`, async ({ }) => {
      const res = await RequestFactory.postAdvert(advert);
      expect(res.status()).toBe(400);
    })
  );

  AdvertFactory.invalidAdvertsWithNegativeFields.forEach(({ name, advert }) =>
    test(`Post request with ${name}`, async ({ }) => {
      const res = await RequestFactory.postAdvert(advert);
      expect(res.status()).toBe(400);
    })
  );
});

test.describe('Negative cases with id', () => {
  
    test(`GET advert by incorrect id`, async ({ }) => {
      const res = await RequestFactory.getAdvertById('111');
      expect(res.status()).toBe(400);
    });

    test(`GET advert by inexisting id`, async ({ }) => {
      const res = await RequestFactory.getAdvertById(faker.string.uuid());
      expect(res.status()).toBe(404);
    })

});