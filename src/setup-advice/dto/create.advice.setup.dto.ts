import { IsNotEmpty, IsNumber, IsOptional, IsSemVer, IsString } from "class-validator"

export class CreateSetupAdviceDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsOptional()
    @IsString()
    description: string
    @IsOptional()
    @IsNumber()
    slNo: number
}