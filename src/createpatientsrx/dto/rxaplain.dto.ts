import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { SetPlainDto } from 'src/set-plain/dto/create.set.plain.dto';

export class CreateRxPlainDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  plainId: number;
  @IsOptional()
  @IsNumber()
  patientsrxid: number;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => SetPlainDto)
  setupPlain?: SetPlainDto;
}
