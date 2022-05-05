import { ApiProperty } from "@nestjs/swagger";

export class Cliente {

  @ApiProperty({ description: 'Identificador', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nome', example: 'John Smith'})
  nome: string;

  @ApiProperty({ description: 'Idade', example: 30 })
  idade: number;
}