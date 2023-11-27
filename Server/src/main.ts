/* eslint-disable prettier/prettier */
import { ExceptionsLoggerFilter } from './exceptionsLogger.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionsLoggerFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
