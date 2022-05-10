import { Module } from '@nestjs/common';
import { TelefonesController } from './telefones.controller';
import { TelefonesService } from './telefones.service';

@Module({
  imports: [],
  controllers: [ TelefonesController ],
  providers: [ TelefonesService ]
})
export class TelefonesModule{}
