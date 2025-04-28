import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { MachineDriver } from "../../machine-driver/models/machine-driver.model";
import { Machine } from "../../machine/models/machine.model";


interface IDriverCreatoinArrt {
    first_name: string;
    last_name: string;
    phone: string;
    drive_license: string
}


@Table({ tableName: "driver", timestamps: false })
export class Driver extends Model<Driver, IDriverCreatoinArrt> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  drive_license: string;

    @BelongsToMany(() => Machine, ()=>MachineDriver)
    machine: Machine[]
}