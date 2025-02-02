import { Test, TestingModule } from '@nestjs/testing';
import { AddPatientService } from './add-patient.service';

describe('AddPatientService', () => {
  let service: AddPatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddPatientService],
    }).compile();

    service = module.get<AddPatientService>(AddPatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
