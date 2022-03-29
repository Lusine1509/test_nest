import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkStatus(): string {
    return 'OK Mkrtich!';
  }
}
