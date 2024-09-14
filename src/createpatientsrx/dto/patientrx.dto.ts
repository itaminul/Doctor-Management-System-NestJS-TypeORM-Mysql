import { Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateRxExaminationDTO } from "./rxexamination.dto"
import { CreateRxMedicineDTO } from "./rxmedicine.dto"
import { CreateRxInvestigationDTO } from "./rxinvestigation.dto"
import { CreateRxAdviceDTO } from "./rxadvice.dto"
import { CreateRxComplainsDTO } from "./rxcomplains.dto"
import { CreateComplainDTO } from "src/complain/dto/create.complain.dto"


export class CreatePatientsRxDTO {
    @IsOptional()
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsString()
    RXDATE: string
    @IsNumber()
    followUp: number
    @IsNumber()
    rxStatus: number
    
    @IsOptional()  // Make optional
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxExaminationDTO)
    rxexaminations?: CreateRxExaminationDTO[]

    @IsOptional()  // Make optional
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxMedicineDTO)
    rxmedicine?: CreateRxMedicineDTO[]

    @IsOptional()  // Make optional
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxInvestigationDTO)
    rxInvestigations?: CreateRxInvestigationDTO[]

    @IsOptional()  // Make optional
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxAdviceDTO)
    rxadvice?: CreateRxAdviceDTO[]

    @IsOptional()  // Make optional
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateComplainDTO)
    rxComplains?: CreateComplainDTO[]
}