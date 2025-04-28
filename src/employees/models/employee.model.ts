import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { BuildingEmployee } from "../../building_employees/models/building_employee.model"
import { Company } from "../../company/models/company.model"


interface IEmployeCreationAttr {
    full_name: string
    position: string
    phone_number: string
    hired_at: Date
    companyId: number
}

@Table({ tableName: "employees", timestamps: false })
export class Employe extends Model<Employe, IEmployeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
  })
  position: string;

  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @Column({
    type: DataType.DATEONLY,
  })
  hired_at: Date;

  @ForeignKey(() => Company)
  @Column({ type: DataType.INTEGER })
  companyId: number;


  @BelongsTo(() => Company)
  companys: Company

    @BelongsToMany(() => Employe, ()=>BuildingEmployee)
    employe: Employe[]
}