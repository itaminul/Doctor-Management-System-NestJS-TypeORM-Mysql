import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDoctorDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name: string;
  @IsNumber()
  @IsOptional()
  slNo: number;
  @IsString()
  @IsOptional()
  degree_name: string;
}
