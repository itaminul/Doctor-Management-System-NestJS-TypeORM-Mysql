import { Test, TestingModule } from '@nestjs/testing';
import { SetOnExaminationService } from './set-on-examination.service';

describe('SetOnExaminationService', () => {
  let service: SetOnExaminationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetOnExaminationService],
    }).compile();

    service = module.get<SetOnExaminationService>(SetOnExaminationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
