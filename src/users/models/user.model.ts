import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/models/role.model";
import { UserRoles } from "./user-role.model";

interface IUserCreateAttr{
    name: string;
    email: string;
    password: string
}

@Table({ tableName: "users " })
export class User extends Model<User, IUserCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;


  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  is_active: boolean;

  @BelongsToMany(() => Role, ()=>UserRoles)
  roles: Role[]
}
