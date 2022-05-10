import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TelefonesService } from './telefones.service';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';
import { Telefone } from './entities/telefone.entity';

@ApiBearerAuth()
@ApiTags('telefones')
@Controller({ path:'telefones', version: '1' })
export class TelefonesController {
  constructor(private readonly telefonesService: TelefonesService){ }

  @Post()
  @ApiOperation({ summary: 'Criar um telefone' })
  @ApiResponse({ status: 200, description: 'Telefone registrado', type: Telefone })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createTelefoneDto: CreateTelefoneDto): Promise<Telefone> {
    return this.telefonesService.create(createTelefoneDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar um telefone' })
  @ApiResponse({ status: 200, description: 'Telefone atualizado', type: Telefone })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(@Body() updateTelefoneDto: UpdateTelefoneDto): Promise<Telefone> {
    return this.telefonesService.update(updateTelefoneDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um telefone' })
  @ApiResponse({ status: 200, description: 'Deletar telefone', type: Boolean })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteByID(@Param('id') id: string): Promise<boolean> {
    return this.telefonesService.deleteById(+id);
  }

  @Post(':id/restore')
  @ApiOperation({ summary: 'Restaurar um telefone deletado' })
  @ApiResponse({ status: 200, description: 'Telefone restaurado', type: Telefone })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async restoreById(@Param('id') id: string): Promise<Telefone> {
    return this.telefonesService.restoreById(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar um telefone' })
  @ApiResponse({ status: 200, description: 'Telefone atualizado', type: Telefone })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Telefone> {
    return this.telefonesService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar telefones' })
  @ApiResponse({ status: 200, description: 'Lista de telefones', type: Telefone, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Telefone[] {
    return this.telefonesService.list();
  }

}