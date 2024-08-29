import { IsNumber, IsOptional } from "class-validator"

export class CreateRxExaminationDTO {
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    examinationId: number
}