import { IsNumber, IsOptional } from "class-validator"

export class CreateRxExaminationDTO {
     @IsOptional()
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    examinationId?: number
}