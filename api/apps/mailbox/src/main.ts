import { NestFactory } from '@nestjs/core';
import { MailboxModule } from './mailbox.module';

async function bootstrap() {
  const app = await NestFactory.create(MailboxModule);
  await app.listen(3000);
}
bootstrap();
