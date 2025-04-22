import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
    constructor( private readonly userService: UsersService){}

    async singup (createUserDto: CreateUserDto){
        const condidate = await this.userService.findbyEmail(createUserDto.email)

        if(condidate) {
            // throw new HttpException("yo'qolll",HttpException.BAD_REQUEST) ;
            throw new BadRequestException("yo'qolll")
        }

        const hashedPassword = await bcrypt.hash(createUserDto.password, 7)
        createUserDto.password = hashedPassword
        const newUser = await this.userService.create(createUserDto)
        return newUser
    }
}
