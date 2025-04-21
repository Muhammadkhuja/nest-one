import { Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Employe } from "./models/employee.model";
import { CompanyService } from "src/company/company.service";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employe) private employeModule: typeof Employe,
    private readonly companyService: CompanyService
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeModule.create(createEmployeeDto);
  }

  findAll() {
    return this.employeModule.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
