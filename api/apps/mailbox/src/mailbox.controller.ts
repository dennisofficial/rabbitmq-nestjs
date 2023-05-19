import { Controller, Get } from '@nestjs/common';
import { MailboxService } from './mailbox.service';

@Controller()
export class MailboxController {
  constructor(private readonly mailboxService: MailboxService) {}

  @Get()
  getHello(): string {
    return this.mailboxService.getHello();
  }
}
