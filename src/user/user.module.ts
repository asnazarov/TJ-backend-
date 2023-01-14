import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../index";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
