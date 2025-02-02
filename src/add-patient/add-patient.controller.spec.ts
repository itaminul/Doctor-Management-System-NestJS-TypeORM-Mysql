import { Test, TestingModule } from '@nestjs/testing';
import { AddPatientController } from './add-patient.controller';

describe('AddPatientController', () => {
  let controller: AddPatientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddPatientController],
    }).compile();

    controller = module.get<AddPatientController>(AddPatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
