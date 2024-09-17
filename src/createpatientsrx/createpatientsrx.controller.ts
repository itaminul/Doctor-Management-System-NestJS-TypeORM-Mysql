import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatePatientsRxDTO } from './dto/patientrx.dto';
import { UpdatePatientsRxDTO } from './dto/updatePatientrx.dto';

@Controller('createpatientsrx')
export class CreatepatientsrxController {
  constructor(public readonly createPatientService: CreatepatientsrxService) {}
  @Get()
  async getAll() {
    const results = await this.createPatientService.getAll();
    return results;
  }

  @Post()
  async create(@Body() createPatientRxDto: CreatePatientsRxDTO) {
    return await this.createPatientService.create(createPatientRxDto);
  }
}
