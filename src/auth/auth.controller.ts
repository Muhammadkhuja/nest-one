import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SinginDto } from './dto/singin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("singup")
  signUp(@Body() createUserDto: CreateUserDto){
    return this.authService.singup(createUserDto)
  }

  
  @Post("singin")
  signIn(@Body() singinDto: SinginDto){
    return this.authService.singIn(singinDto)
  }
}
