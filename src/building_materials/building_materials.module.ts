import { Module } from '@nestjs/common';
import { BuildingMaterialsService } from './building_materials.service';
import { BuildingMaterialsController } from './building_materials.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BuildingMaterials } from './models/building_material.model';

@Module({
  imports: [SequelizeModule.forFeature([BuildingMaterials])],
  controllers: [BuildingMaterialsController],
  providers: [BuildingMaterialsService],
})
export class BuildingMaterialsModule {}
