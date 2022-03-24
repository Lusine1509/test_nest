import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import {HealthService} from './health.service'

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll()).toBe('OK Mkrtich!');
    });
  });
});
