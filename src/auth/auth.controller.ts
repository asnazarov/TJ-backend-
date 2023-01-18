import {Controller, Post, UseGuards, Request} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateAuthDto} from './dto/create-auth.dto';
import {UpdateAuthDto} from './dto/update-auth.dto';
import {AuthGuard} from "@nestjs/passport";
import {validate} from "class-validator";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
