import { IsNotEmpty } from "class-validator";

export class Auth {
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    password!: string;
}
