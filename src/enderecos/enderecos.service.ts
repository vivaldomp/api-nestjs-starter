import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {

  private enderecos: Endereco[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral', idade: 44 },
    { id: 2, nome: 'Marechal Deodoro', idade: 15 },
    { id: 3, nome: 'Francisco de Assis', idade: 22 },
  ]

  create(createEnderecoDto: CreateEnderecoDto): Endereco {
    let endereco: Endereco = {
      id: this.enderecos.length +1,
      ...createEnderecoDto
    }
    this.enderecos.push(endereco);
    return endereco;
  }

  update(updateEnderecoDto: UpdateEnderecoDto): Endereco {
    let endereco=this.getByID(updateEnderecoDto.id);
    endereco = {
      ...endereco,
      ...updateEnderecoDto
    }
    return endereco;
  }

  deleteById(id: number): boolean {
    return true;
  }

  restoreById(id: number): Endereco {
    return this.enderecos[id-1];
  }

  getByID(id: number): Endereco {
    const endereco = this.enderecos.find(endereco=>{
      endereco.id == id;
    })
    return endereco;
  }

  list(): Array<Endereco> {
    return this.enderecos;
  }
}
