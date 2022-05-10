import { Injectable } from '@nestjs/common';
import { Agencia } from './entities/agencia.entity';

@Injectable()
export class AgenciasService {

  private agencias: Agencia[]=[
    { id: 1, nome: 'Pedro Alvarez Cabral' },
    { id: 2, nome: 'Marechal Deodoro' },
    { id: 3, nome: 'Francisco de Assis' },
  ]
  
  getByID(id: number): Agencia {
    const agencia = this.agencias.find(agencia=>{
      agencia.id == id;
    })
    return agencia;
  }

  list(): Array<Agencia> {
    return this.agencias;
  }
}
