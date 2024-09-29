import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateMedicineDTO } from 'src/medicine/dto/create.medicine.dto';

export class CreateRxMedicineDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  medicineId: number;

  @IsOptional()
  @IsNumber()
  numberOfTimes: number;

  @IsOptional()
  @IsNumber()
  morning: number;

  @IsOptional()
  @IsNumber()
  lunch: number;

  @IsOptional()
  @IsNumber()
  evening: number;

  @IsOptional()
  @IsNumber()
  night: number;

  @IsOptional()
  @IsString()
  doses: string;
  @IsNumber()
  @IsOptional()
  isContinue: number;
  @IsOptional()
  @IsString()
  duration: string;
  @IsOptional()
  @IsString()
  remarks: string;

  @IsNumber()
  @IsOptional()
  patientsrxid: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateMedicineDTO)
  medicine?: CreateMedicineDTO;
}
