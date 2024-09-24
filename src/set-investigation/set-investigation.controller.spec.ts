import { Test, TestingModule } from '@nestjs/testing';
import { SetInvestigationController } from './set-investigation.controller';

describe('SetInvestigationController', () => {
  let controller: SetInvestigationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetInvestigationController],
    }).compile();

    controller = module.get<SetInvestigationController>(
      SetInvestigationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
