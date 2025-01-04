import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatePatientsRxDTO } from './dto/patientrx.dto';
import { UpdatePatientsRxDTO } from './dto/updatePatientrx.dto';

@Controller('createpatientsrx')
export class CreatepatientsrxController {
  constructor(public readonly createPatientService: CreatepatientsrxService) {}
  @Get()
  async getAll() {
    return await this.createPatientService.getAll();
  }

  @Post()
  async create(@Body() createPatientRxDto: any) {
    return await this.createPatientService.create(createPatientRxDto);
  }
  @Post('/create-new')
  async createNew(@Body() createPatientRxDto: any) {
    return await this.createPatientService.createNew(createPatientRxDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePatDtp: UpdatePatientsRxDTO,
  ) {
    return await this.createPatientService.update(id, updatePatDtp);
  }

  @Get('/get-patient-by-id/:id')
  async getPatientById(@Param('id') id: number) {
    return await this.createPatientService.getPatientById(id);
  }
}
