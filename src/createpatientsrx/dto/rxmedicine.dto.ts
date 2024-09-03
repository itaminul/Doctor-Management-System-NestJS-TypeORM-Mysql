import { Type } from "class-transformer"
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { CreateMedicineDTO } from "src/medicine/dto/create.medicine.dto"

export class CreateRxMedicineDTO {
    @IsNumber()
    id: number
    @IsOptional()
    @IsNumber()
    medicineId: number
    @IsOptional()
    @IsString()
    doses: string
    @IsNumber()
    isContinue: number
    @IsOptional()
    @IsString()
    duration: string
    @IsOptional()
    @IsString()
    remarks: string

    @IsArray()
    @ValidateNested()
    @Type(() => CreateMedicineDTO)
    medicine: CreateMedicineDTO
}