import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { CarcategoryModule } from "./carcategory/carcategory.module";
import { BuildersModule } from "./builders/builders.module";
import { Builder } from "./builders/models/builder.model";
import { MachineModule } from "./machine/machine.module";
import { Machine } from "./machine/models/machine.model";
import { DriverModule } from "./driver/driver.module";
import { MachineDriverModule } from "./machine-driver/machine-driver.module";
import { Driver } from "./driver/models/driver.model";
import { MachineDriver } from "./machine-driver/models/machine-driver.model";
import { EmployeesModule } from "./employees/employees.module";
import { Employe } from "./employees/models/employee.model";
import { BuildingsModule } from "./buildings/buildings.module";
import { BuildingEmployeesModule } from "./building_employees/building_employees.module";
import { MaterialsModule } from "./materials/materials.module";
import { BuildingMaterialsModule } from "./building_materials/building_materials.module";
import { BuildingEmployee } from "./building_employees/models/building_employee.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { UsersModule } from "./users/users.module";
import { UserRoles } from "./users/models/user-role.model";
import { User } from "./users/models/user.model";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PH_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Company,
        Builder,
        Machine,
        Driver,
        MachineDriver,
        Employe,
        BuildingEmployee,
        User,
        UserRoles,
        Role,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    CompanyModule,
    CarcategoryModule,
    BuildersModule,
    MachineModule,
    DriverModule,
    MachineDriverModule,
    EmployeesModule,
    BuildingsModule,
    BuildingEmployeesModule,
    MaterialsModule,
    BuildingMaterialsModule,
    RolesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
