import { Controller, Get } from '@nestjs/common';
import { CentrifugoService } from './centrifugo.service';

@Controller()
export class CentrifugoController {
  constructor(private readonly centrifugoService: CentrifugoService) {}

  @Get()
  getHello(): string {
    return this.centrifugoService.getHello();
  }
}
