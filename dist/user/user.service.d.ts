import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from "typeorm";
import { UserEntity } from "../index";
import { LoginUserDto } from "./dto/login-user.dto";
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
    createUser(dto: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findById(id: number): Promise<UserEntity>;
    findByCond(cond: LoginUserDto): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
