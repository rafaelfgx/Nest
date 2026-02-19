import { Reflector } from "@nestjs/core";
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ANONYMOUS } from "./anonymous.decorator";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        if (this.reflector.getAllAndOverride<boolean>(ANONYMOUS, [context.getHandler(), context.getClass()])) return true;
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.replace("Bearer", "").trim();

        try {
            await this.jwtService.verifyAsync(token);
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }
}
