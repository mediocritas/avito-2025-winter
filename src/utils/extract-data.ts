import { APIResponse } from '@playwright/test';
import { Advert, AdvertDTO } from '../models/advert.types';
import { PostResponseData } from '../models/response.types';

export const extractAdvertsFromResponse = async (response: APIResponse): Promise<Advert[]> => {
    const data = await response.json();
 
    if (!Array.isArray(data)) {
        throw new Error('Response data is not an array');
    }

    return data.map(advert => ({
        name: advert.name,
        id: advert.id,
        price: advert.price,
        sellerId: advert.sellerId,
        statistics: {
            contacts: advert.statistics?.contacts ?? 0,
            likes: advert.statistics?.likes ?? 0,
            viewCount: advert.statistics?.viewCount ?? 0
        }
    }));
};

export const extractAdvertIdFromResponse = async (response: APIResponse): Promise<PostResponseData> => {
    const data = await response.json();
    const regex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
    return {
        status: data.status.match(regex)
    }
}

export const advertDTOtoAdvert = (advertDTO: AdvertDTO, id:string): Advert => {
    return {
        name: advertDTO.name ?? 'name undefined',
        id: id,
        price: parseNumber(advertDTO.price),
        sellerId: parseNumber(advertDTO.sellerId),
        statistics: {
            contacts: parseNumber(advertDTO.statistics?.contacts),
            likes: parseNumber(advertDTO.statistics?.likes),
            viewCount: parseNumber(advertDTO.statistics?.viewCount)
        }
    };
}

const parseNumber = (value: Partial<number | {}> | undefined): number => {
    if (typeof value === 'number') {
        return value;
    }
    return 0;
}