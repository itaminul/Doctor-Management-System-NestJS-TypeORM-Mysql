import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { SetPackagesDto } from 'src/set-packages/dto/create.set.packages.dto';

export class CreateRxPackageDTO {
  @IsOptional()
  @IsNumber()
  id: number;
  @IsOptional()
  @IsNumber()
  packageId: number;
  @IsOptional()
  @IsNumber()
  patientsrxid: number;
  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => SetPackagesDto)
  setupPackage?: SetPackagesDto;
}
