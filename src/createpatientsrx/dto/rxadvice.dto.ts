import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { CreateSetupAdviceDto } from 'src/setup-advice/dto/create.advice.setup.dto';

export class CreateRxAdviceDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  adviceId: number;
  @IsOptional()
  @IsNumber()
  patientsrxid: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateSetupAdviceDto)
  setupAdvice?: CreateSetupAdviceDto;
}
