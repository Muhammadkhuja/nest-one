import {
  BadRequestException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SinginDto } from "./dto/singin.dto";
import { User } from "../users/models/user.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
      isActive: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async singup(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findbyEmail(createUserDto.email);

    if (condidate) {
      // throw new HttpException("yo'qolll",HttpException.BAD_REQUEST) ;
      throw new BadRequestException("yo'qolll");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  async singIn(singinDto: SinginDto) {
    const user = await this.userService.findbyEmail(singinDto.email);
    if (!user) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    console.log(user);
    

    const validPassword = await bcrypt.compare(
      singinDto.password,
      user.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }



    for(const role of user.roles){
        if (role.value == singinDto.value.toUpperCase()){
            return this.generateToken(user);
        }
    }
        throw new UnauthorizedException("tekshir role yo'q ");

  }

}
