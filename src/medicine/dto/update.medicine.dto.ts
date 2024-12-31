import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateDoctorDTO } from 'src/doctor/dto/create.doctor.dto';

export class UpdateMedicineDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  doctorId?: number;
  @IsOptional()
  @IsNumber()
  medicineId?: number;
  @IsOptional()
  @IsString()
  medicineName: string;
  @IsNumber()
  @IsOptional()
  slNo: number;
  @IsString()
  @IsOptional()
  description: string;
  @IsNumber()
  @IsOptional()
  medicineGenericeId: number;
  @IsNumber()
  @IsOptional()
  manufacturerId: number;
  @IsNumber()
  @IsOptional()
  categoryId: number;
  @IsString()
  @IsOptional()
  strength: string;
  @IsNumber()
  @IsOptional()
  priorityStatus: number;
  @IsOptional()
  @IsNumber()
  activeStatus: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateDoctorDTO)
  doctor?: CreateDoctorDTO;
}
