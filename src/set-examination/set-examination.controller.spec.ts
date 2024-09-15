import { Test, TestingModule } from '@nestjs/testing';
import { SetExaminationController } from './set-examination.controller';

describe('SetExaminationController', () => {
  let controller: SetExaminationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetExaminationController],
    }).compile();

    controller = module.get<SetExaminationController>(SetExaminationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
