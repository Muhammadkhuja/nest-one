import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { UserRoles } from "./user-role.model";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreateAttr{
    name: string;
    email: string;
    password: string
}

@Table({ tableName: "users " })
export class User extends Model<User, IUserCreateAttr> {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvch ismi",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user1",
    description: "Foydalanuvch ismi",
  })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({
    example: "user1@mail.com",
    description: "Foydalanuvch email",
  })
  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @ApiProperty({
    example: "qwe123",
    description: "Foydalanuvch password",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
