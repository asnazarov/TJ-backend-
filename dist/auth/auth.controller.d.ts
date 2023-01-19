import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        id: number;
        fullName: string;
        email: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfile(req: any): any;
}
