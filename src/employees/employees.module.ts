import { Module } from "@nestjs/common";
import { EmployeesService } from "./employees.service";
import { EmployeesController } from "./employees.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Employe } from "./models/employee.model";
import { CompanyModule } from "src/company/company.module";

@Module({
  imports: [SequelizeModule.forFeature([ Employe ]),CompanyModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
