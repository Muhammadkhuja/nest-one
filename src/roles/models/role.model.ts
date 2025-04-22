import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/users/models/user-role.model";
import { User } from "src/users/models/user.model";

interface IRoleCreationAttr{
    value: string;
    description: string
}
@Table({ tableName: "roles", timestamps: false })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

    @BelongsToMany(() => User, ()=>UserRoles)
    users: User[]
}
