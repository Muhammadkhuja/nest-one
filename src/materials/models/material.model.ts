import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { BuildingMaterials } from "../../building_materials/models/building_material.model";

interface MaterialsCreationAttr {
  name: string;
  unit: string;
  price_per_unit: string;
}

@Table({ tableName: "materials" })
export class Material extends Model<Material, MaterialsCreationAttr> {
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
  unit: string;

  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  price_per_unit: string;

  @BelongsToMany(() => Material, () => BuildingMaterials)
  material: Material[];
}
