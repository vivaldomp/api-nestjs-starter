import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DependentesService } from './dependentes.service';
import { CreateDependenteDto } from './dto/create-dependente.dto';
import { UpdateDependenteDto } from './dto/update-dependente.dto';
import { Dependente } from './entities/dependente.entity';

@ApiBearerAuth()
@ApiTags('dependentes')
@Controller({ path:'dependentes', version: '1' })
export class DependentesController {
  constructor(private readonly dependentesService: DependentesService){ }

  @Post()
  @ApiOperation({ summary: 'Criar um dependente' })
  @ApiResponse({ status: 200, description: 'Dependente registrado', type: Dependente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createDependenteDto: CreateDependenteDto): Promise<Dependente> {
    return this.dependentesService.create(createDependenteDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar um dependente' })
  @ApiResponse({ status: 200, description: 'Dependente atualizado', type: Dependente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(@Body() updateDependenteDto: UpdateDependenteDto): Promise<Dependente> {
    return this.dependentesService.update(updateDependenteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um dependente' })
  @ApiResponse({ status: 200, description: 'Deletar dependente', type: Boolean })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteByID(@Param('id') id: string): Promise<boolean> {
    return this.dependentesService.deleteById(+id);
  }

  @Post(':id/restore')
  @ApiOperation({ summary: 'Restaurar um dependente deletado' })
  @ApiResponse({ status: 200, description: 'Dependente restaurado', type: Dependente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async restoreById(@Param('id') id: string): Promise<Dependente> {
    return this.dependentesService.restoreById(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar um dependente' })
  @ApiResponse({ status: 200, description: 'Dependente atualizado', type: Dependente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Dependente> {
    return this.dependentesService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar dependentes' })
  @ApiResponse({ status: 200, description: 'Lista de dependentes', type: Dependente, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Dependente[] {
    return this.dependentesService.list();
  }

}