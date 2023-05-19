import { Test, TestingModule } from '@nestjs/testing';
import { MailboxController } from './mailbox.controller';
import { MailboxService } from './mailbox.service';

describe('MailboxController', () => {
  let mailboxController: MailboxController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MailboxController],
      providers: [MailboxService],
    }).compile();

    mailboxController = app.get<MailboxController>(MailboxController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mailboxController.getHello()).toBe('Hello World!');
    });
  });
});
