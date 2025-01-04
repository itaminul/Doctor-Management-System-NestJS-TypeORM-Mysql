import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMedicineDTO {
  @IsOptional()
  @IsNumber()
  id: number;
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
  
}
