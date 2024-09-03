import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"

export class CreateMedicineDTO {
    @IsNumber()
    id: number
    @IsString()
    @IsOptional()
    medicineName: string;
    @IsNumber()
    @IsOptional()
    slNo: number
    @IsString()
    @IsOptional()
    description: string
    @IsNumber()
    @IsOptional()
    medicineGenericeId: number
    @IsNumber()
    @IsOptional()
    manufacturerId: number
    @IsNumber()
    @IsOptional()
    categoryId: number
    @IsString()
    @IsOptional()
    strength: string

}