import { IsNumber, IsOptional } from "class-validator"

export class CreateRxAdviceDTO {
    @IsOptional()
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    adviceId: number
}