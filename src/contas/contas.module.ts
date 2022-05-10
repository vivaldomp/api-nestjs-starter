import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';

@Module({
  imports: [],
  controllers: [ ContasController ],
  providers: [ ContasService ]
})
export class ContasModule{}
