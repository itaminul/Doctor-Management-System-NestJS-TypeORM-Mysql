import { Test, TestingModule } from '@nestjs/testing';
import { SetInvestigationService } from './set-investigation.service';

describe('SetInvestigationService', () => {
  let service: SetInvestigationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetInvestigationService],
    }).compile();

    service = module.get<SetInvestigationService>(SetInvestigationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
