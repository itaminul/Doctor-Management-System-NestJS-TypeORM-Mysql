import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SetInvestigationDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsOptional()
    description: string
    @IsString()
    @IsOptional()
    slNo: number;
} 