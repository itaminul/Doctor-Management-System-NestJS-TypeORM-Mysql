import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateRxComplainsDTO {
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    complainId: number
    @IsNumber()
    updated_by: number
}