"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimateParametersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const climate_parameters_service_1 = require("./climate-parameters.service");
const climateParams_dto_1 = require("./DTO/climateParams.dto");
let ClimateParametersController = class ClimateParametersController {
    constructor(climateService) {
        this.climateService = climateService;
    }
    async findAll() {
        return await this.climateService.getAll();
    }
    async create(newClimatePatamsDTO) {
        return await this.climateService.addNewParams(newClimatePatamsDTO);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClimateParametersController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [climateParams_dto_1.NewClimateParamsDTO]),
    __metadata("design:returntype", Promise)
], ClimateParametersController.prototype, "create", null);
ClimateParametersController = __decorate([
    swagger_1.ApiTags('Climate-parameters'),
    common_1.Controller('climate-parameters'),
    __metadata("design:paramtypes", [climate_parameters_service_1.ClimateParametersService])
], ClimateParametersController);
exports.ClimateParametersController = ClimateParametersController;
//# sourceMappingURL=climate-parameters.controller.js.map