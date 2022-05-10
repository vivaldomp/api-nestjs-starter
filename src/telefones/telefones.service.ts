import { Injectable } from '@nestjs/common';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';
import { Telefone } from './entities/telefone.entity';

@Injectable()
export class TelefonesService {

  private telefones: Telefone[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral', idade: 44 },
    { id: 2, nome: 'Marechal Deodoro', idade: 15 },
    { id: 3, nome: 'Francisco de Assis', idade: 22 },
  ]

  create(createTelefoneDto: CreateTelefoneDto): Telefone {
    let telefone: Telefone = {
      id: this.telefones.length +1,
      ...createTelefoneDto
    }
    this.telefones.push(telefone);
    return telefone;
  }

  update(updateTelefoneDto: UpdateTelefoneDto): Telefone {
    let telefone=this.getByID(updateTelefoneDto.id);
    telefone = {
      ...telefone,
      ...updateTelefoneDto
    }
    return telefone;
  }

  deleteById(id: number): boolean {
    return true;
  }

  restoreById(id: number): Telefone {
    return this.telefones[id-1];
  }

  getByID(id: number): Telefone {
    const telefone = this.telefones.find(telefone=>{
      telefone.id == id;
    })
    return telefone;
  }

  list(): Array<Telefone> {
    return this.telefones;
  }
}
