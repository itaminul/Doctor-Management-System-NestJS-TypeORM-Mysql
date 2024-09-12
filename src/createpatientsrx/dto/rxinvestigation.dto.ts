import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, ValidateNested } from "class-validator"
import { SetInvestigationDto } from "src/set-investigation/dto/create.set.investigation.dto"

export class CreateRxInvestigationDTO {
    @IsNumber()
    id: number
    @IsNumber()
    @IsOptional()
    investigationId: number
    
    @IsArray()
    @ValidateNested()
    @Type(() => SetInvestigationDto)
    setInvestigation: SetInvestigationDto
}