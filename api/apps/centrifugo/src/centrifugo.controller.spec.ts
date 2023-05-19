import { Test, TestingModule } from '@nestjs/testing';
import { CentrifugoController } from './centrifugo.controller';
import { CentrifugoService } from './centrifugo.service';

describe('CentrifugoController', () => {
  let centrifugoController: CentrifugoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CentrifugoController],
      providers: [CentrifugoService],
    }).compile();

    centrifugoController = app.get<CentrifugoController>(CentrifugoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(centrifugoController.getHello()).toBe('Hello World!');
    });
  });
});
