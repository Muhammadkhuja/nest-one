import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Building } from "../../buildings/models/building.model";
import { Material } from "../../materials/models/material.model";


interface BuildingMaterialCreateAttr {
  buildingId: number;
  materialId: number;
  quantity: number;
  delivered_at: Date;
}


@Table({
  tableName: "building_materials",
})
export class BuildingMaterials extends Model<
  BuildingMaterials,
  BuildingMaterialCreateAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Building)
  @Column({ type: DataType.INTEGER })
  buildingId: number;

  @ForeignKey(() => Material)
  @Column({ type: DataType.INTEGER })
  materialId: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  quantity: number;

  @Column({ type: DataType.DATEONLY })
  delivered_at: Date;
}