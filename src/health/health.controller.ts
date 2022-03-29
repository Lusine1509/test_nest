import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  checkStatus(): string {
    return this.healthService.checkStatus();
  }

  @Get("/test")
  test(): string {
    return 'sdfs';
  }
}
