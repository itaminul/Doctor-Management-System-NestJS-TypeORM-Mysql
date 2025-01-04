import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';


export class CreatePatientsDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  age: string;
  @IsOptional()
  @IsString()
  gender: string;
  @IsOptional()
  @IsString()
  MOBILE_NO: string;
  
}
