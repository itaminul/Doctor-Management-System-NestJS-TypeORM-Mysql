import { Test, TestingModule } from '@nestjs/testing';
import { SetOnExaminationController } from './set-on-examination.controller';

describe('SetOnExaminationController', () => {
  let controller: SetOnExaminationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetOnExaminationController],
    }).compile();

    controller = module.get<SetOnExaminationController>(SetOnExaminationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
