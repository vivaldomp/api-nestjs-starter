import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  private clientes: Cliente[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral', idade: 44 },
    { id: 2, nome: 'Marechal Deodoro', idade: 15 },
    { id: 3, nome: 'Francisco de Assis', idade: 22 },
  ]

  create(createClienteDto: CreateClienteDto): Cliente {
    let cliente: Cliente = {
      id: this.clientes.length +1,
      ...createClienteDto
    }
    this.clientes.push(cliente);
    return cliente;
  }

  update(updateClienteDto: UpdateClienteDto): Cliente {
    let cliente=this.getByID(updateClienteDto.id);
    cliente = {
      ...cliente,
      ...updateClienteDto
    }
    return cliente;
  }

  deleteById(id: number): boolean {
    return true;
  }

  restoreById(id: number): Cliente {
    return this.clientes[id-1];
  }

  getByID(id: number): Cliente {
    const cliente = this.clientes.find(cliente=>{
      cliente.id == id;
    })
    return cliente;
  }

  list(): Array<Cliente> {
    return this.clientes;
  }
}
