import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateRxExaminationDTO } from './rxexamination.dto';
import { CreateRxMedicineDTO } from './rxmedicine.dto';
import { CreateRxInvestigationDTO } from './rxinvestigation.dto';
import { CreateRxAdviceDTO } from './rxadvice.dto';
import { CreateRxComplainsDTO } from './rxcomplains.dto';

export class UpdatePatientsRxDTO {
  @IsOptional()
  @IsNumber()
  patientsrxid: number;
  @IsString()
  RXDATE: string;
  @IsNumber()
  followUp: number;
  @IsNumber()
  rxStatus: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxExaminationDTO)
  rxexaminations?: CreateRxExaminationDTO[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxMedicineDTO)
  rxmedicine?: CreateRxMedicineDTO[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxInvestigationDTO)
  rxInvestigations?: CreateRxInvestigationDTO[];



  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxAdviceDTO)
  rxAdvice?: CreateRxAdviceDTO[];

  

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxComplainsDTO)
  rxComplains?: CreateRxComplainsDTO[];
}
