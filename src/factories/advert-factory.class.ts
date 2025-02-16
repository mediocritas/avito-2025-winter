import { AdvertDTO } from '../models/advert.types';
import { faker } from '@faker-js/faker';

const sellerId : number = parseInt(process.env.SELLER_ID!, 10);

export default class AdvertFactory {

    static invalidAdvertsWithEmptyFields = [
        { name: 'Empty name', advert: AdvertFactory.getAdvertWithEmptyName() },
        { name: 'Empty price', advert: AdvertFactory.getAdvertWithEmptyPrice() },
        { name: 'Empty sellerId', advert: AdvertFactory.getAdvertWithEmptySellerId() },
        { name: 'Empty statistics', advert: AdvertFactory.getAdvertWithEmptyStatistics() },
        { name: 'Empty contacts', advert: AdvertFactory.getAdvertWithEmptyContacts() },
        { name: 'Empty likes', advert: AdvertFactory.getAdvertWithEmptyLikes() },
        { name: 'Empty viewCount', advert: AdvertFactory.getAdvertWithEmptyViewCount() },
    ];

    static invalidAdvertsWithNegativeFields = [
        { name: 'Negative price', advert: AdvertFactory.getAdvertWithNegativePrice() },
        { name: 'Negative sellerId', advert: AdvertFactory.getAdvertWithNegativeSellerId() },
        { name: 'Negative contacts', advert: AdvertFactory.getAdvertWithNegativeContacts() },
        { name: 'Negative likes', advert: AdvertFactory.getAdvertWithNegativeLikes() },
        { name: 'Negative viewCount', advert: AdvertFactory.getAdvertWithNegativeViewCount() },
    ]

    static invalidAdvertsWithLargeFields = [

        { name: 'Too big price', advert: AdvertFactory.getAdvertWithTooBigPrice() },
        { name: 'Too long sellerId', advert: AdvertFactory.getAdvertWithTooLongSellerId() },
        { name: 'Too long name', advert: AdvertFactory.getAdvertWithTooLongName() },
    ]

    static invalidAdvertsWithFieldsAsStrings = [
        { name: 'Price as string', advert: AdvertFactory.getAdvertWithPriceAsString() },
        { name: 'SellerId as string', advert: AdvertFactory.getAdvertWithSellerIdAsString() },
        { name: 'Contacts as string', advert: AdvertFactory.getAdvertWithContactsAsString() },
        { name: 'Likes as string', advert: AdvertFactory.getAdvertWithLikesAsString() },
        { name: 'ViewCount as string', advert: AdvertFactory.getAdvertWithViewCountsAsString() },
    ];

    static invalidAdvertsWithMissingFields = [
        { name: 'Missing name', advert: AdvertFactory.getAdvertWithNoName() },
        { name: 'Missing price', advert: AdvertFactory.getAdvertWithNoPrice() },
        { name: 'Missing sellerId', advert: AdvertFactory.getAdvertWithNoSellerId() },
        { name: 'Missing statistics', advert: AdvertFactory.getAdvertWithNoStatistics() },
        { name: 'Missing contacts', advert: AdvertFactory.getAdvertWithNoContacts() },
        { name: 'Missing likes', advert: AdvertFactory.getAdvertWithNoLikes() },
        { name: 'Missing viewCount', advert: AdvertFactory.getAdvertWithNoViewCounts() },
    ];


    static getCorrectAdvert(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithNegativePrice(): AdvertDTO {
        return {
            name: 'phone', price: -85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithNegativeSellerId(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: -sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithNegativeContacts(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: -32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithNegativeLikes(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: -35, viewCount: 14
            }
        };
    }

    static getAdvertWithNegativeViewCount(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: -14
            }
        };
    }


    static getAdvertWithTooBigPrice(): AdvertDTO {
        return {
            name: 'phone', price: faker.number.bigInt(), sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithTooLongSellerId(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: 34520987,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithTooLongName(): AdvertDTO {
        return {
            name: faker.string.alpha(100), price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }


    static getAdvertWithEmptyName(): AdvertDTO {
        return {
            name: '', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithEmptyPrice(): AdvertDTO {
        return {
            name: 'phone', price: {}, sellerId: sellerId,
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithEmptySellerId(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: {},
            statistics: {
                contacts: 32, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithEmptyStatistics(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {}
        };
    }

    static getAdvertWithEmptyContacts(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: {}, likes: 0, viewCount: 14
            }
        };
    }

    static getAdvertWithEmptyLikes(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32,
                likes: {},
                viewCount: 14
            }
        };
    }

    static getAdvertWithEmptyViewCount(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics: {
                contacts: 32,
                likes: 0,
                viewCount: {}
            }
        };
    }

    static getAdvertWithPriceAsString(): AdvertDTO {
        return {
            name: 'phone', price: '85', sellerId: sellerId,
            statistics:
                { contacts: 32, likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithSellerIdAsString(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: `${sellerId}`,
            statistics:
                { contacts: 32, likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithContactsAsString(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { contacts: '32', likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithLikesAsString(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { contacts: 32, likes: '0', viewCount: 14 }
        };
    }

    static getAdvertWithViewCountsAsString(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { contacts: 32, likes: 0, viewCount: '14' }
        };
    }

    static getAdvertWithNoName(): Partial<AdvertDTO> {
        return {
            price: 85, sellerId: sellerId,
            statistics:
                { contacts: 32, likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithNoPrice(): Partial<AdvertDTO> {
        return {
            name: 'phone', sellerId: sellerId,
            statistics:
                { contacts: 32, likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithNoSellerId(): Partial<AdvertDTO> {
        return {
            name: 'phone', price: 85,
            statistics:
                { contacts: 32, likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithNoStatistics(): Partial<AdvertDTO> {
        return { name: 'phone', price: 85, sellerId: sellerId };
    }

    static getAdvertWithNoContacts(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { likes: 0, viewCount: 14 }
        };
    }

    static getAdvertWithNoLikes(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { contacts: 32, viewCount: 14 }
        };
    }

    static getAdvertWithNoViewCounts(): AdvertDTO {
        return {
            name: 'phone', price: 85, sellerId: sellerId,
            statistics:
                { contacts: 32, likes: 0 }
        };
    }
}