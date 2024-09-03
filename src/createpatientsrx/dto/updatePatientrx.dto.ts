import { Type } from "class-transformer"
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator"
import { CreateRxExaminationDTO } from "./rxexamination.dto"
import { CreateRxMedicineDTO } from "./rxmedicine.dto"
import { CreateRxInvestigationDTO } from "./rxinvestigation.dto"
import { CreateRxAdviceDTO } from "./rxadvice.dto"
import { CreateRxComplainsDTO } from "./rxcomplains.dto"

export class UpdatePatientsRxDTO {
    @IsNumber()
    id: number
    @IsNumber() 
    patientsrxid: number
    @IsString()
    RXDATE: string
    @IsNumber()
    followUp: number
    @IsNumber()
    rxStatus: number

    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxExaminationDTO)
    rxexaminations: CreateRxExaminationDTO[]

    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxMedicineDTO)
    rxmedicine: CreateRxMedicineDTO[]

    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxInvestigationDTO)
    rxInvestigations: CreateRxInvestigationDTO[]
    
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxAdviceDTO)
    rxAdvice: CreateRxAdviceDTO[]

    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => CreateRxComplainsDTO)
    rxComplains: CreateRxComplainsDTO[]
}