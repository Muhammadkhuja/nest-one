import { Injectable } from "@nestjs/common";
import { CreateBuildingEmployeeDto } from "./dto/create-building_employee.dto";
import { UpdateBuildingEmployeeDto } from "./dto/update-building_employee.dto";
import { BuildingEmployee } from "./models/building_employee.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class BuildingEmployeesService {
  constructor(
    @InjectModel(BuildingEmployee)
    private buildingemployeeModel: typeof BuildingEmployee
  ) {}
  create(createBuildingEmployeeDto: CreateBuildingEmployeeDto) {
    return this.buildingemployeeModel.create(createBuildingEmployeeDto);
  }

  findAll() {
    return this.buildingemployeeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingEmployee`;
  }

  update(id: number, updateBuildingEmployeeDto: UpdateBuildingEmployeeDto) {
    return `This action updates a #${id} buildingEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingEmployee`;
  }
}
