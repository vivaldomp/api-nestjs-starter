import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@ApiBearerAuth()
@ApiTags('enderecos')
@Controller({ path:'enderecos', version: '1' })
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService){ }

  @Post()
  @ApiOperation({ summary: 'Criar um endereco' })
  @ApiResponse({ status: 200, description: 'Endereco registrado', type: Endereco })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
    return this.enderecosService.create(createEnderecoDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar um endereco' })
  @ApiResponse({ status: 200, description: 'Endereco atualizado', type: Endereco })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(@Body() updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
    return this.enderecosService.update(updateEnderecoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um endereco' })
  @ApiResponse({ status: 200, description: 'Deletar endereco', type: Boolean })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteByID(@Param('id') id: string): Promise<boolean> {
    return this.enderecosService.deleteById(+id);
  }

  @Post(':id/restore')
  @ApiOperation({ summary: 'Restaurar um endereco deletado' })
  @ApiResponse({ status: 200, description: 'Endereco restaurado', type: Endereco })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async restoreById(@Param('id') id: string): Promise<Endereco> {
    return this.enderecosService.restoreById(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar um endereco' })
  @ApiResponse({ status: 200, description: 'Endereco atualizado', type: Endereco })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Endereco> {
    return this.enderecosService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar enderecos' })
  @ApiResponse({ status: 200, description: 'Lista de enderecos', type: Endereco, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Endereco[] {
    return this.enderecosService.list();
  }

}