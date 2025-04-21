import { Injectable } from '@nestjs/common';
import { CreateBuildingMaterialDto } from './dto/create-building_material.dto';
import { UpdateBuildingMaterialDto } from './dto/update-building_material.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingMaterials } from './models/building_material.model';

@Injectable()
export class BuildingMaterialsService {
  constructor(@InjectModel(BuildingMaterials) private buildingmaterialsModel: typeof BuildingMaterials){}
  create(createBuildingMaterialDto: CreateBuildingMaterialDto) {
    return this.buildingmaterialsModel.create(createBuildingMaterialDto);
  }

  findAll() {
    return this,this.buildingmaterialsModel.findAll({ include: {all: true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingMaterial`;
  }

  update(id: number, updateBuildingMaterialDto: UpdateBuildingMaterialDto) {
    return `This action updates a #${id} buildingMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingMaterial`;
  }
}
