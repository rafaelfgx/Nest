import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./auth.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    async signIn(dto: AuthDto): Promise<string> {
        const user = await this.userService.getByUsername(dto.username);
        if (user?.password !== dto.password) throw new UnauthorizedException();
        return await this.jwtService.signAsync({ sub: user.id });
    }
}
