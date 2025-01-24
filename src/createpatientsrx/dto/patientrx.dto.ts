import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateRxExaminationDTO } from './rxexamination.dto';
import { CreateRxMedicineDTO } from './rxmedicine.dto';
import { CreateRxInvestigationDTO } from './rxinvestigation.dto';
import { CreateRxAdviceDTO } from './rxadvice.dto';
import { CreateComplainDTO } from 'src/complain/dto/create.complain.dto';
import { SetPlainDto } from 'src/set-plain/dto/create.set.plain.dto';
import { SetOnExaminationDto } from 'src/set-on-examination/dto/create.set.on-examination.dto';

export class CreatePatientsRxDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  doctorId: number;
  @IsNotEmpty()
  @IsString()
  RXDATE: string;
  @IsNumber()
  followUp: number;
  @IsNumber()
  rxStatus: number;
  @IsOptional()
  @IsString()
  followupStates: string;
  @IsOptional()
  @IsNumber()
  patientId: number;
  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxExaminationDTO)
  rxexaminations?: CreateRxExaminationDTO[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxMedicineDTO)
  rxmedicine?: CreateRxMedicineDTO[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxInvestigationDTO)
  rxInvestigations?: CreateRxInvestigationDTO[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRxAdviceDTO)
  rxadvice?: CreateRxAdviceDTO[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateComplainDTO)
  rxComplains?: CreateComplainDTO[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SetPlainDto)
  rxPlain?: SetPlainDto[];

  @IsOptional() // Make optional
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SetOnExaminationDto)
  rxOnExamination?: SetOnExaminationDto[];

  // @IsOptional()
  // @IsArray()
  // @ValidateNested({ each: true})
  // @Type(() => pat_patients_info)
  // patientInfo: pat_patients_info
}
