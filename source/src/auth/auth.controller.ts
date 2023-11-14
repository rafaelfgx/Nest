import { Controller, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthRequest } from "./auth.request";
import { Anonymous } from "./anonymous.decorator";

@ApiTags("Auth")
@Controller("auth")
@Anonymous()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() request: AuthRequest) {
        return this.authService.signIn(request);
    }
}
