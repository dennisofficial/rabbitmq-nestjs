import { NestFactory } from '@nestjs/core';
import { CentrifugoModule } from './centrifugo.module';

async function bootstrap() {
  const app = await NestFactory.create(CentrifugoModule);
  await app.listen(3000);
}
bootstrap();
