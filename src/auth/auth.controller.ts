import { Controller, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Anonymous } from "./anonymous.decorator";
import { AuthService } from "./auth.service";
import { AuthDto } from "./auth.dto";

@ApiTags("Auth")
@Controller("auth")
@Anonymous()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    signIn(@Body() dto: AuthDto) {
        return this.authService.signIn(dto);
    }
}
