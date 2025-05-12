import { IsNotEmpty } from "class-validator";

export class AddProductDto {
    @IsNotEmpty()
    description!: string;
}
