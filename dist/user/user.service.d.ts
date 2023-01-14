import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from "typeorm";
import { UserEntity } from "../index";
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
    createUser(dto: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findUsersById(id: number): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
