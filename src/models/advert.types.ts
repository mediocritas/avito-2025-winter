export type Advert = {
    name: string;
    id: string;
    price: number;
    sellerId: number;
    statistics: Statistics;
}

export type Statistics = {
    contacts: number;
    likes: number;
    viewCount: number;
}

export type AdvertDTO<T = number | {}> = {
    name: Partial<string>;
    price: Partial<T | number>;
    sellerId: Partial<T | number>;
    statistics: Partial<StatisticsDTO>;
};


export type StatisticsDTO<T = number | {}> = {
    contacts: Partial<T | number>;
    likes: Partial<T | number>;
    viewCount: Partial<T | number>;
}
