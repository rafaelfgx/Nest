import { IsNotEmpty } from "class-validator";

export class AuthRequest {
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    password!: string;
}
