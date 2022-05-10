import { Module } from '@nestjs/common';
import { AgenciasModule } from './agencias/agencias.module';
import { ClientesModule } from './clientes/clientes.module';
import { ContasModule } from './contas/contas.module';
import { DependentesModule } from './dependentes/dependentes.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { TelefonesModule } from './telefones/telefones.module';

@Module({
  imports: [ClientesModule, AgenciasModule, ContasModule, DependentesModule, TelefonesModule, EnderecosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
