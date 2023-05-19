import { Injectable } from '@nestjs/common';

@Injectable()
export class MailboxService {
  getHello(): string {
    return 'Hello World!';
  }
}
