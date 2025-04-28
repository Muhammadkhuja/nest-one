import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/models/role.model";
import { AddRoleDto } from "./dto/addrole.dto";
import { ActivateuserDto } from "./dto/activateuser.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findByvalue(createUserDto.value);
    if (!role) {
      throw new NotFoundException("Bunday role topilmadi !");
    }
    // await newUser.$set("roles", [role.id]); // user role table
    // newUser.roles = [role];
    // await newUser.save();
    return newUser;
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    return user;
  }

  async findbyEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
    // return user?.dataValues;

      return user ? user.get({ plain: true }) : null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.findOne(addRoleDto.userId);
    const role = await this.roleService.findByvalue(addRoleDto.value);

    if (!role) {
      throw new NotFoundException("Yo'q role");
    }
    if (!user) {
      throw new NotFoundException("Yo'q odam");
    }
    await user.$add("roles", role.id);
    return "endi Role bor";
  }

  async remuveRole(addRoleDto: AddRoleDto) {
    const user = await this.findOne(addRoleDto.userId);
    const role = await this.roleService.findByvalue(addRoleDto.value);

    if (!role) {
      throw new NotFoundException("Yo'q role");
    }
    if (!user) {
      throw new NotFoundException("Yo'q odam");
    }
    await user.$remove("roles", role.id);
    return "endi Role yo'q";
  }

async activateUser(activateUserDto: ActivateuserDto){
    const user = await this.findOne(activateUserDto.userId)

    if (!user) {
      throw new BadRequestException("Bunday foydalanuvchi topilmadi");
    }

    user.is_active = true
    await user.save()

    return "Foydalanuvchi qo'shildi"
  }
}
