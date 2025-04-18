import { Column, DataType, Model, Table } from "sequelize-typescript";

interface carcategoryCreatAttr {
  name: string;
  description: string;
  price: string;
}

@Table({ tableName: "carcategory" })
export class CarCategory extends Model<CarCategory, carcategoryCreatAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  price: string;
}
