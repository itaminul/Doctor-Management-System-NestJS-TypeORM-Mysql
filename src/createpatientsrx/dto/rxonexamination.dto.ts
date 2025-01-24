import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { SetOnExaminationDto } from 'src/set-on-examination/dto/create.set.on-examination.dto';
import { SetPlainDto } from 'src/set-plain/dto/create.set.plain.dto';

export class CreateRxOnexaminationDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  onExaminationId: number;
  @IsOptional()
  @IsNumber()
  patientsrxid: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => SetOnExaminationDto)
  setupExamination?: SetOnExaminationDto;
}
