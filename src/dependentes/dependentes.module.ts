import { Module } from '@nestjs/common';
import { DependentesController } from './dependentes.controller';
import { DependentesService } from './dependentes.service';

@Module({
  imports: [],
  controllers: [ DependentesController ],
  providers: [ DependentesService ]
})
export class DependentesModule{}
