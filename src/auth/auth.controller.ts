import { Controller, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Anonymous } from "./anonymous.decorator";
import { AuthService } from "./auth.service";
import { Auth } from "./auth";

@ApiTags("Auth")
@Controller("auth")
@Anonymous()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() auth: Auth) {
        return this.authService.signIn(auth);
    }
}
