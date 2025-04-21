import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { BuildingEmployee } from "src/building_employees/models/building_employee.model";
import { BuildingMaterials } from "src/building_materials/models/building_material.model";

interface BuildingCreationAttr {
  name: string;
  address: string;
  started_at: Date;
  finished_at: Date;
}

@Table({ tableName: "buildings" })
export class Building extends Model<Building, BuildingCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.DATEONLY,
  })
  started_at: Date;

  @Column({
    type: DataType.DATEONLY,
  })
  finished_at: Date;

    @BelongsToMany(() => Building, ()=>BuildingEmployee)
    building: Building[]

    @BelongsToMany(() => Building, ()=>BuildingMaterials)
    buildings: Building[]
}