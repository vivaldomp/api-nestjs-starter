import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@ApiBearerAuth()
@ApiTags('clientes')
@Controller({ path:'clientes', version: '1' })
export class ClientesController {
  constructor(private readonly clientesService: ClientesService){ }

  @Post()
  @ApiOperation({ summary: 'Criar um cliente' })
  @ApiResponse({ status: 200, description: 'Cliente registrado', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(createClienteDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar um cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(@Body() updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    return this.clientesService.update(updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um cliente' })
  @ApiResponse({ status: 200, description: 'Deletar cliente', type: Boolean })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteByID(@Param('id') id: string): Promise<boolean> {
    return this.clientesService.deleteById(+id);
  }

  @Post(':id/restore')
  @ApiOperation({ summary: 'Restaurar um cliente deletado' })
  @ApiResponse({ status: 200, description: 'Cliente restaurado', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async restoreById(@Param('id') id: string): Promise<Cliente> {
    return this.clientesService.restoreById(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar um cliente' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Cliente> {
    return this.clientesService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes', type: Cliente, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Cliente[] {
    return this.clientesService.list();
  }

}