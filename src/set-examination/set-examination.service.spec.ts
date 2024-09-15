import { Test, TestingModule } from '@nestjs/testing';
import { SetExaminationService } from './set-examination.service';

describe('SetExaminationService', () => {
  let service: SetExaminationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetExaminationService],
    }).compile();

    service = module.get<SetExaminationService>(SetExaminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
