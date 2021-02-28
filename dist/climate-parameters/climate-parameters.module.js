"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimateParametersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const weather_entity_1 = require("../model/weather.entity");
const climate_parameters_controller_1 = require("./climate-parameters.controller");
const climate_parameters_service_1 = require("./climate-parameters.service");
let ClimateParametersModule = class ClimateParametersModule {
};
ClimateParametersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([weather_entity_1.weather])],
        controllers: [climate_parameters_controller_1.ClimateParametersController],
        providers: [climate_parameters_service_1.ClimateParametersService]
    })
], ClimateParametersModule);
exports.ClimateParametersModule = ClimateParametersModule;
//# sourceMappingURL=climate-parameters.module.js.map