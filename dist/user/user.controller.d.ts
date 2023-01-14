import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUsers(dto: CreateUserDto): Promise<import("..").UserEntity>;
    findAll(): Promise<import("..").UserEntity[]>;
    findUsersById(id: number): Promise<import("..").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
