import { Type } from "class-transformer"
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator"
import { CreateRxExaminationDTO } from "./rxexamination.dto"
import { CreateRxMedicineDTO } from "./rxmedicine.dto"

export class CreatePatientsRxDTO {
    @IsNumber()
    id: number
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
}