import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@ApiBearerAuth()
@ApiTags('contas')
@Controller({ path:'contas', version: '1' })
export class ContasController {
  constructor(private readonly contasService: ContasService){ }

  @Post()
  @ApiOperation({ summary: 'Criar uma conta' })
  @ApiResponse({ status: 200, description: 'Conta registrada', type: Conta })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(@Body() createContaDto: CreateContaDto): Promise<Conta> {
    return this.contasService.create(createContaDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar uma conta' })
  @ApiResponse({ status: 200, description: 'Conta atualizada', type: Conta })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(@Body() updateContaDto: UpdateContaDto): Promise<Conta> {
    return this.contasService.update(updateContaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma conta' })
  @ApiResponse({ status: 200, description: 'Conta deletada', type: Boolean })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async deleteByID(@Param('id') id: string): Promise<boolean> {
    return this.contasService.deleteById(+id);
  }

  @Post(':id/restore')
  @ApiOperation({ summary: 'Restaurar uma conta deletada' })
  @ApiResponse({ status: 200, description: 'Conta restaurado', type: Conta })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async restoreById(@Param('id') id: string): Promise<Conta> {
    return this.contasService.restoreById(+id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar uma conta' })
  @ApiResponse({ status: 200, description: 'Conta recuperada', type: Conta })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async getById(@Param('id') id: string): Promise<Conta> {
    return this.contasService.getByID(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar contas' })
  @ApiResponse({ status: 200, description: 'Lista de contas', type: Conta, isArray: true })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  list(): Conta[] {
    return this.contasService.list();
  }

}