import { IsNotEmpty } from "class-validator";

export class AddProductRequest {
    @IsNotEmpty()
    description!: string;
}
