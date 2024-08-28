import { IsNumber, IsOptional } from "class-validator"

export class CreateRxInvestigationDTO {
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    investigationId: number
}