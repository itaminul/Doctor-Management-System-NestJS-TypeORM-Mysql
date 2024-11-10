import { HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pat_patients_info } from 'src/entitys/pat_patients_info';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(pat_patients_info)
    public readonly setPatientInformation: Repository<pat_patients_info>,
  ) {}

  async getAll() {
    try {
      const results = await this.setPatientInformation.find({
        select: {
          id: true,
          name: true,
        },
      });
      return results;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllPendingPatients() {
    try {
      const results = await this.setPatientInformation.find({
        where: {
          PATIENT_STATUS: 0,
        },
        select: {
          id: true,
          name: true,
          AGE: true,
          GENDER: true,
        },
      });
      return results;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getPendingPatientsInformationById(@Param('id') id: number) {
    try {
      const results = await this.setPatientInformation.find({
        where: {
          id: id,
          PATIENT_STATUS: 0,
        },
        select: {
          id: true,
          name: true,
          AGE: true,
          GENDER: true,
        },
      });
      return results;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
