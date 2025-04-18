import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarcategoryService } from './carcategory.service';
import { CreateCarCategoryDto } from './dto/create-carcategory.dto';
import { CarCategory } from './models/carcategory.model';
import { UpdateCarCategoryDto } from './dto/update-carcategory.dto';

@Controller("carcategory")
export class CarcategoryController {
  constructor(private readonly carcategoryService: CarcategoryService) {}

  @Post()
  async createCarcategory(
    @Body() createCarCategoryDto: CreateCarCategoryDto
  ): Promise<CarCategory> {
    return this.carcategoryService.createCarcategory(createCarCategoryDto);
  }

  @Get()
  async findAllCarcategory() {
    return this.carcategoryService.findAllCarcategory();
  }

  @Get(":id")
  async findOneCarcategory(@Param("id") id: string) {
    return this.carcategoryService.findOneCarcategory(+id);
  }
  @Put(":id")
  async updateCarcategory(
    @Param("id") id: string,
    @Body() updateCarCategoryDto: UpdateCarCategoryDto
  ) {
    return this.carcategoryService.updateCarcategory(+id, updateCarCategoryDto);
  }

  @Delete(":id")
  async deleteCarcategory(@Param("id") id: string) {
    return this.carcategoryService.deleteCarcategory(+id);
  }
}
