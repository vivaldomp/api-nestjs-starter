import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  private clientes: Cliente[]=[
    { id: 1, nome: "Pedro Alvarez Cabral", idade: 44 },
    { id: 2, nome: "Marechal Deodoro", idade: 15 },
    { id: 3, nome: "Francisco de Assis", idade: 22 },
  ]

  list(): Array<Cliente> {
    return this.clientes;
  }
}
