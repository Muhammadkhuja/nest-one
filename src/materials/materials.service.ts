import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Material } from './models/material.model';

@Injectable()
export class MaterialsService {
  constructor(@InjectModel(Material) private materialModel: typeof Material) {}
  async createMaterial(createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialModel.create(createMaterialDto);
  }

  findAll(): Promise<Material[]> {
    return this.materialModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} material`;
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return `This action updates a #${id} material`;
  }

  remove(id: number) {
    return `This action removes a #${id} material`;
  }
}
