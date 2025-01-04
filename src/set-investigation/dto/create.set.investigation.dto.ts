import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class SetInvestigationDto {
  @IsOptional()
  @IsNumber()
  id?: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsNumber()
  slNo: number;
  @IsOptional()
  @IsNumber()
  activeStatus: number;
}
