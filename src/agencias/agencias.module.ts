import { Module } from '@nestjs/common';
import { AgenciasController } from './agencias.controller';
import { AgenciasService } from './agencias.service';

@Module({
  imports: [],
  controllers: [ AgenciasController ],
  providers: [ AgenciasService ]
})
export class AgenciasModule{}
