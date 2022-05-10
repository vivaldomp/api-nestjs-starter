import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContasService {

  private contas: Conta[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral', idade: 44 },
    { id: 2, nome: 'Marechal Deodoro', idade: 15 },
    { id: 3, nome: 'Francisco de Assis', idade: 22 },
  ]

  create(createContaDto: CreateContaDto): Conta {
    let cliente: Conta = {
      id: this.contas.length +1,
      ...createContaDto
    }
    this.contas.push(cliente);
    return cliente;
  }

  update(updateContaDto: UpdateContaDto): Conta {
    let conta=this.getByID(updateContaDto.id);
    conta = {
      ...conta,
      ...updateContaDto
    }
    return conta;
  }

  deleteById(id: number): boolean {
    return true;
  }

  restoreById(id: number): Conta {
    return this.contas[id-1];
  }

  getByID(id: number): Conta {
    const conta = this.contas.find(conta=>{
      conta.id == id;
    })
    return conta;
  }

  list(): Array<Conta> {
    return this.contas;
  }
}
