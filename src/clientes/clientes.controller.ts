import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CreateClienteDTO } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@ApiBearerAuth()
@ApiTags('clientes')
@Controller({
  path:"clientes",
  version: '1',
})
export class ClientesController {
  constructor(private readonly clientesService: ClientesService){ }

  @Post()
  @ApiOperation({
    summary: "Criar cliente"
  })
  @ApiResponse({ status: 200, description: 'Cliente criaddo', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(createClienteDto: CreateClienteDTO): Promise<Cliente> {
    return this.clientesService.create(createClienteDto);
  }


  @Get()
  @ApiResponse({ status: 200, description: 'Lista de clientes', type: Cliente })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Cliente[] {
    return this.clientesService.list();
  }

}