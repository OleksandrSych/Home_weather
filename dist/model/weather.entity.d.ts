import { Timestamp } from 'typeorm';
export declare class weather {
    id: number;
    createdatetime: Timestamp;
    createdby: string;
    temperature: number;
    humidity: number;
    ppm: number;
}
