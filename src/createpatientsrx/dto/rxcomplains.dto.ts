import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, ValidateNested } from "class-validator"
import { CreateComplainDTO } from "src/complain/dto/create.complain.dto"

export class CreateRxComplainsDTO {
     @IsOptional()
    @IsNumber()
    id?: number
    @IsNumber()
    updated_by: number
    @IsArray()
    @ValidateNested()
    @Type(() => CreateComplainDTO)
    complains: CreateComplainDTO
}