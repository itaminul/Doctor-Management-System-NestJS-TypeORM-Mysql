import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExaminationDto {
  @IsOptional()
  @IsNumber()
  examinationId: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNumber()
  @IsOptional()
  slNo: number;
  @IsString()
  @IsOptional()
  description: string;
}