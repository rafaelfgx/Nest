import { ApiHideProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateProductDto {
    @ApiHideProperty()
    @IsNotEmpty()
    id!: string;

    @IsNotEmpty()
    description!: string;
}
