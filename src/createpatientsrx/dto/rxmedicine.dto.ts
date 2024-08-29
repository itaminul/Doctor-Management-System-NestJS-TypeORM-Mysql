import { IsNumber, IsOptional, IsString } from "class-validator"

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
}