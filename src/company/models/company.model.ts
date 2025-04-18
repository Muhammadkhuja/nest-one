import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CompanyCreationAttr{
    name: string;
    phone: string;
    email: string;
    address: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull:false,
    unique:true,
  })
  name: string;

  @Column({
    type: DataType.STRING(15),
  })
  phone: string;
  
  @Column({
    type: DataType.STRING(50),
  })
  email: string;
  
  @Column({
    type: DataType.STRING,
  })
  address: string;
}