import { UserService } from "../user/user.service";
import { UserEntity } from "../user/entities/user.entity";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: UserEntity): Promise<{
        access_token: string;
        id: number;
        fullName: string;
        email: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
