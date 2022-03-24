import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    findAll(): string {
        return 'OK Mkrtich!';
      }
}
