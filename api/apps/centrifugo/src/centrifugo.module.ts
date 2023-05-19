import { Module } from '@nestjs/common';
import { CentrifugoController } from './centrifugo.controller';
import { CentrifugoService } from './centrifugo.service';

@Module({
  imports: [],
  controllers: [CentrifugoController],
  providers: [CentrifugoService],
})
export class CentrifugoModule {}
