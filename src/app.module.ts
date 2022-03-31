import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';


const { label, json, timestamp, align, printf } = winston.format

const myFormat = printf(
  ({ level, message, label, timestamp }) => {
      return `{\n\tlabel: ${label},\n\ttimestamp: ${timestamp},\n\tlevel: ${level},\n\tmessage: ${message}\n},`
  }
)

@Module({
  imports: [
    WinstonModule.forRoot({
      levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5,
        silly: 6,
        custom: 7,
    },
    format: winston.format.combine(
        label({ label: '🚩 Info!' }),
        json(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        align(),
        myFormat
    ),
    transports: [new winston.transports.Console()]
  
    }),
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
