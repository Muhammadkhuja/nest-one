import { ApiProperty } from "@nestjs/swagger";
import {  IsDateString, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBuilderDto {
  @ApiProperty({
    example: "builder1",
    description: "Foydalanuvchi ismi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "2020-01-01",
    description: "Foydalanuvchi tug'ulgan kuni",
  })
  @IsDateString()
  brith_day: Date;

  @ApiProperty({
    example: "111.11",
    description: "Foydalanuvchi maoshi",
  })
  @IsDecimal()
  salary: number;

  @ApiProperty({
    example: "8",
    description: "kompany idsi",
  })
  @IsNumber()
  companyIf: number;
}
