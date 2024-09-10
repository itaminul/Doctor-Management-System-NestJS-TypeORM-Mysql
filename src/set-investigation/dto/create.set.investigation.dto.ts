import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
export class SetInvestigationDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsOptional()
    @IsString()
    description: string
    @IsOptional()
    @IsNumber()
    slNo: number;
} 