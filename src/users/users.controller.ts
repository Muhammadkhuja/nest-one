import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddRoleDto } from "./dto/addrole.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./models/user.model";
import { JwtAuthGuard } from "../common/guards/jwtauth.guard";
import { JwtSelfGuard } from "../common/guards/jwrself.guard";
import { Roles } from "../common/decorator/rolesauth.decorator";
import { JwtRolesGuard } from "../common/guards/roles.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Foydalanuvchi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Create User ",
    type: User,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchilarni olish" })
  @ApiResponse({
    status: 200,
    description: "List of users",
    type: [User],
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "Foydalanuvchilarni id bilann olish" })
  @ApiResponse({
    status: 200,
    description: "user of ID",
    type: [User],
  })
  @UseGuards(JwtAuthGuard)
  @UseGuards(JwtSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchilarni Yangilash" })
  @ApiResponse({
    status: 200,
    description: "Update",
    type: User,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "foydalanuvchilarni o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Delete",
    type: [User],
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchilarni roli" })
  @ApiResponse({
    status: 200,
    description: "List of users role",
    type: User,
  })
  @HttpCode(HttpStatus.OK)
  @Roles("ADMIN", "SUPERADMIN")
  @UseGuards(JwtRolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post("addrole")
  async addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("activeuser")
  async activeUser(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.remuveRole(addRoleDto);
  }
}
