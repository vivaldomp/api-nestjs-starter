import { Injectable } from '@nestjs/common';
import { CreateDependenteDto } from './dto/create-dependente.dto';
import { UpdateDependenteDto } from './dto/update-dependente.dto';
import { Dependente } from './entities/dependente.entity';

@Injectable()
export class DependentesService {

  private dependentes: Dependente[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral', idade: 44 },
    { id: 2, nome: 'Marechal Deodoro', idade: 15 },
    { id: 3, nome: 'Francisco de Assis', idade: 22 },
  ]

  create(createDependenteDto: CreateDependenteDto): Dependente {
    let dependente: Dependente = {
      id: this.dependentes.length +1,
      ...createDependenteDto
    }
    this.dependentes.push(dependente);
    return dependente;
  }

  update(updateDependenteDto: UpdateDependenteDto): Dependente {
    let dependente=this.getByID(updateDependenteDto.id);
    dependente = {
      ...dependente,
      ...updateDependenteDto
    }
    return dependente;
  }

  deleteById(id: number): boolean {
    return true;
  }

  restoreById(id: number): Dependente {
    return this.dependentes[id-1];
  }

  getByID(id: number): Dependente {
    const dependente = this.dependentes.find(dependente=>{
      dependente.id == id;
    })
    return dependente;
  }

  list(): Array<Dependente> {
    return this.dependentes;
  }
}
