import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions, Repository} from "typeorm";
import {UserEntity} from "../index";
import {isNumber} from "class-validator";
import {LoginUserDto} from "./dto/login-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>,
  ) {
  }

  createUser(dto: CreateUserDto) {
    const newUser = this.repository.create(dto);
    return this.repository.save(newUser);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    // @ts-ignore
    return this.repository.findOne(id);
  }

  findByCond(cond: LoginUserDto) {
    return this.repository.findOne({
      where: {
        email: cond.email,
        password: cond.password
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
