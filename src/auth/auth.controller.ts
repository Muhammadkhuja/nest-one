import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("singup")
  signUp(@Body() createUserDto: CreateUserDto){
    return this.authService.singup(createUserDto)
  }
}
