import { Injectable } from '@nestjs/common';

@Injectable()
export class CentrifugoService {
  getHello(): string {
    return 'Hello World!';
  }
}
