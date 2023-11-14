import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthRequest } from "./auth.request";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async signIn(request: AuthRequest): Promise<string> {
        const user = await this.userService.getByUsername(request.username);

        if (user?.password !== request.password) throw new UnauthorizedException();

        return await this.jwtService.signAsync({ sub: user.id });
    }
}
