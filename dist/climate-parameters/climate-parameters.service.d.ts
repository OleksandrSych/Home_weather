import { NewClimateParamsDTO } from './DTO/climateParams.dto';
import { weather } from '../model/weather.entity';
import { Repository } from 'typeorm';
export declare class ClimateParametersService {
    private readonly repo;
    constructor(repo: Repository<weather>);
    addNewParams(newClimatePatamsDTO: NewClimateParamsDTO): Promise<import("typeorm").InsertResult>;
    getAll(): Promise<weather[]>;
}
