import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Auth } from "./auth";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async signIn(auth: Auth): Promise<string> {
        const user = await this.userService.getByUsername(auth.username);
        if (user?.password !== auth.password) throw new UnauthorizedException();
        return await this.jwtService.signAsync({ sub: user.id });
    }
}
