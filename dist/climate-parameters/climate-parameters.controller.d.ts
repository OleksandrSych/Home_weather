import { ClimateParametersService } from './climate-parameters.service';
import { NewClimateParamsDTO } from './DTO/climateParams.dto';
export declare class ClimateParametersController {
    private readonly climateService;
    constructor(climateService: ClimateParametersService);
    findAll(): Promise<import("../model/weather.entity").weather[]>;
    create(newClimatePatamsDTO: NewClimateParamsDTO): Promise<import("typeorm").InsertResult>;
}
