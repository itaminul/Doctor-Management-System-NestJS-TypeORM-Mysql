import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreateComplainDTO } from 'src/complain/dto/create.complain.dto';

export class CreateRxComplainsDTO {
  @IsOptional()
  @IsNumber()
  id?: number;
  @IsOptional()
  @IsNumber()
  complainId?: number
  @IsOptional()
  @IsNumber()
  patientsrxid?: number
  @IsOptional()
  @IsNumber()
  updated_by: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateComplainDTO)
  complains?: CreateComplainDTO;
}
