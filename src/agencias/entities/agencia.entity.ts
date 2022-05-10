import { ApiProperty } from "@nestjs/swagger";

export class Agencia {

  @ApiProperty({ description: 'Identificador', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nome', example: 'John Smith'})
  nome: string;

}