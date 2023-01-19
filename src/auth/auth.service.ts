import {Injectable} from '@nestjs/common';
import {CreateAuthDto} from './dto/create-auth.dto';
import {UpdateAuthDto} from './dto/update-auth.dto';
import {UserService} from "../user/user.service";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../user/entities/user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByCond({
      email,
      password
    });
    if (user && user.password === password) {
      const {password, ...result} = user;
      return result;
    }
    return null;
  }

  async login(user: UserEntity) {
    const {password, ...userData} = user
    const payload = { email: user.email, sub: user.id };
    return {
      ...userData,
      access_token: this.jwtService.sign(payload),
    };
  }
}
