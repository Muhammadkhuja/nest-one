import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "src/roles/models/role.model";

interface IUserroleCreateAttr{
    userId: number;
    roleId: number;
}

@Table({ tableName: "users-role " })
export class UserRoles extends Model<UserRoles, IUserroleCreateAttr> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  declare roleId: number;



}
