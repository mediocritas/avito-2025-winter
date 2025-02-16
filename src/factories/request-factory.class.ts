import { request, APIResponse } from '@playwright/test';
import { AdvertDTO } from "../models/advert.types";

export default class RequestFactory {

    static readonly baseUrl: string = process.env.BASE_URL!;

    static async getAdvertById(id: string): Promise<APIResponse> {
        const context = await request.newContext();
        return await context.get(
            `${this.baseUrl}/item/${id}`,
            { headers: { 'Content-Type': 'application/json' } }
        );
    }

    static async getAdvertsBySeller(sellerId: string): Promise<APIResponse> {
        const context = await request.newContext();
        return await context.get(
            `${this.baseUrl}/${sellerId}/item`,
            { headers: { 'Content-Type': 'application/json' } }
        );
    }

    static async postAdvert(advert: AdvertDTO | Partial<AdvertDTO>): Promise<APIResponse> {
        const context = await request.newContext();
        return await context.post(
            `${this.baseUrl}/item`,
            {
                headers: { 'Content-Type': 'application/json' },
                data: advert
            }
        );
    }

}