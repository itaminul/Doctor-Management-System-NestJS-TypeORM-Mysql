import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateComplainDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsNumber()
  @IsOptional()
  slNo: number;
  @IsNumber()
  @IsOptional()
  complainId?: number;
  @IsOptional()
  @IsNumber()
  activeStatus: number;
}
