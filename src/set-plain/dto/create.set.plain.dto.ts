import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class SetPlainDto {
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
  plainId: number;
  @IsOptional()
  @IsNumber()
  activeStatus: number;
}
