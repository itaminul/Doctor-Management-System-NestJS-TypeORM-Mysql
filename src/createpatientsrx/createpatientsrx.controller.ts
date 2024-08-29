import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { CreatepatientsrxService } from './createpatientsrx.service';
import { CreatePatientsRxDTO } from './dto/patientrx.dto';
import { UpdatePatientsRxDTO } from './dto/updatePatientrx.dto';

@Controller('createpatientsrx')
export class CreatepatientsrxController {
    constructor(
        public readonly createPatientService: CreatepatientsrxService
    ){}


    @Get()
    async getAll() {
      try {
        const results = await this.createPatientService.getAll();
        return {
          success: true,
          statusCode: HttpStatus.OK,
          message: "Show successfully",
          data: results
        }
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        } else {
          throw new HttpException(
            "Failed to create prescription",
            HttpStatus.INTERNAL_SERVER_ERROR
          );
        }
      }
    }

    @Post()
    async create(@Body() createPatientRxDto: CreatePatientsRxDTO) {
        try {
            const results = await this.createPatientService.create(createPatientRxDto);
            return {
              success: true,
              statusCode: HttpStatus.OK,
              message: "Prescription Createded successfully",
              data: results,
            };
          } catch (error) {
            if (error instanceof HttpException) {
              throw error;
            } else {
              throw new HttpException(
                "Failed to create prescription",
                HttpStatus.INTERNAL_SERVER_ERROR
              );
            }
          }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatePatientsRxDTO:UpdatePatientsRxDTO) {
      try {
        const results = await this.createPatientService.update(id,updatePatientsRxDTO);
        return {
          success: true,
          statusCode: HttpStatus.OK,
          message: "Prescription updated successfully",
          data: results,
        };
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        } else {
          throw new HttpException(
            "Failed to updated prescription",
            HttpStatus.INTERNAL_SERVER_ERROR
          );
        }
      }
    }
}
