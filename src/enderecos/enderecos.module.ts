import { Module } from '@nestjs/common';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';

@Module({
  imports: [],
  controllers: [ EnderecosController ],
  providers: [ EnderecosService ]
})
export class EnderecosModule{}
