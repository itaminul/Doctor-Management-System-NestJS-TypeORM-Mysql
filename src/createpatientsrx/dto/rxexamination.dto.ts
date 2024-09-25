import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { SetupExaminationDto } from 'src/set-examination/dto/create.set.examination.dto';

export class CreateRxExaminationDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsNumber()
  @IsOptional()
  patientsrxid: number;
  @IsOptional()
  @IsNumber()
  examinationId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SetupExaminationDto)
  setexaminationDto?: SetupExaminationDto[];
}
