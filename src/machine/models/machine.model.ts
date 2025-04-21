import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { Company } from "src/company/models/company.model";
import { Driver } from "src/driver/models/driver.model";
import { MachineDriver } from "src/machine-driver/models/machine-driver.model";

interface IMachineCreatorAttr {
  model: string;
  name: string;
  companyId: number;
}

@Table({ tableName: "machine", timestamps: false })
export class Machine extends Model<Machine, IMachineCreatorAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  model: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ForeignKey(() => Company)
  @Column({ type: DataType.INTEGER })
  companyId: number;

  @BelongsTo(() => Company)
  companys: Company;

  @BelongsToMany(() => Driver, ()=>MachineDriver)
  driver: Driver[]
}
