import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';


@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
  ) { }

  @ApiTags('health')
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([]).then(data => data.status);
  }
}


