import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application/modules/application.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  process.env.ENABLE_CORS == 'true' ? app.enableCors() : null;
  app.setGlobalPrefix('api/v1');
  await app.listen(parseInt(process.env.NODE_PORT) || 3000);
}

bootstrap();
