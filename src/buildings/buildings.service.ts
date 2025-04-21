import { Injectable } from "@nestjs/common";
import { CreateBuildingDto } from "./dto/create-building.dto";
import { UpdateBuildingDto } from "./dto/update-building.dto";
import { Building } from "./models/building.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class BuildingsService {
  constructor(@InjectModel(Building) private buildingModel: typeof Building) {}
  async createBuilding(
    createBuildingDto: CreateBuildingDto
  ): Promise<Building> {
    return this.buildingModel.create(createBuildingDto);
  }

  findAll(): Promise<Building[]> {
    return this.buildingModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }

  update(id: number, updateBuildingDto: UpdateBuildingDto) {
    return `This action updates a #${id} building`;
  }

  remove(id: number) {
    return `This action removes a #${id} building`;
  }
}
