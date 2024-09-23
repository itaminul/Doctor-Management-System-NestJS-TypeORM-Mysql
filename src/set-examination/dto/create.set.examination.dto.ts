import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SetupExaminationDto {
    @IsOptional()
    @IsNumber()
    id: number  
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNumber()
    @IsOptional()
    slNo: number
    @IsString()
    @IsOptional()
    description: string
}