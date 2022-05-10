import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateEnderecoDto {
  @IsString()
  @ApiProperty({ description: 'Nome', example: 'John Smith' })
  nome: string;

  @IsInt()
  @ApiProperty({ description: 'Idade', example: 30 })
  idade: number;
}