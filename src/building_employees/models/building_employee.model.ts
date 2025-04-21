import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Building } from "src/buildings/models/building.model";
import { Employe } from "src/employees/models/employee.model";

interface BuildingEmployeecreateAttr {
  buildingId: number;
  employeeId: number;
  role: string;
  assigned_at: Date;
}

@Table({ tableName: "building_employees" })
export class BuildingEmployee extends Model<
  BuildingEmployee,
  BuildingEmployeecreateAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  @ForeignKey(() => Building)
  @Column({ type: DataType.INTEGER })
  buildingId: number;

  @ForeignKey(() => Employe)
  @Column({ type: DataType.INTEGER })
  employeeId: number;

  @Column({ type: DataType.STRING })
  role: string;

  @Column({ type: DataType.DATEONLY })
  assigned_at: Date;
}
