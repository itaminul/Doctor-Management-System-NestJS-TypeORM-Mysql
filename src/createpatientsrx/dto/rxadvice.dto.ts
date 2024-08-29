import { IsNumber, IsOptional } from "class-validator"

export class CreateRxAdviceDTO {
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    adviceId: number
}