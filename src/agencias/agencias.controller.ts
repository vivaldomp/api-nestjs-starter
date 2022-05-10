import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AgenciasService } from './agencias.service';
import { Agencia } from './entities/agencia.entity';

@ApiBearerAuth()
@ApiTags('agencias')
@Controller({ path:'agencias', version: '1' })
export class AgenciasController {
  constructor(private readonly agenciasService: AgenciasService){ }

    @Get(':id')
  @ApiOperation({ summary: 'Consultar uma agência' })
  @ApiResponse({ status: 200, description: 'Agência atualizada', type: Agencia })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Agencia> {
    return this.agenciasService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar agências' })
  @ApiResponse({ status: 200, description: 'Lista de clientes', type: Agencia, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Agencia[] {
    return this.agenciasService.list();
  }

}