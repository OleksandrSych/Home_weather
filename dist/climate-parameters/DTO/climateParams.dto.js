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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewClimateParamsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class NewClimateParamsDTO {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'The Temperature',
        type: Number,
        default: -100,
    }),
    __metadata("design:type", Number)
], NewClimateParamsDTO.prototype, "t", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'The Humidity',
        type: Number,
        default: -100,
    }),
    __metadata("design:type", Number)
], NewClimateParamsDTO.prototype, "h", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'CO2 concentration',
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], NewClimateParamsDTO.prototype, "ppm", void 0);
exports.NewClimateParamsDTO = NewClimateParamsDTO;
//# sourceMappingURL=climateParams.dto.js.map