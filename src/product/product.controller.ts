import { Controller, Param, Query, Body, Get, Post, Put, Delete, ParseUUIDPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { AddProductDto } from "./dtos/add.product.dto";
import { UpdateProductDto } from "./dtos/update.product.dto";
import { ListProductDto } from "./dtos/list.product.dto";
import { ProductDto } from "./dtos/product.dto";

@ApiTags("Products")
@ApiBearerAuth()
@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    add(@Body() dto: AddProductDto): string {
        return this.productService.add(dto);
    }

    @Delete(":id")
    delete(@Param("id", new ParseUUIDPipe()) id: string): void {
        return this.productService.delete(id);
    }

    @Get(":id")
    get(@Param("id", new ParseUUIDPipe()) id: string): ProductDto | undefined {
        return this.productService.get(id);
    }

    @Get()
    list(@Query() dto: ListProductDto): ProductDto[] | undefined {
        return this.productService.list(dto);
    }

    @Put(":id")
    update(@Param("id", new ParseUUIDPipe()) id: string, @Body() dto: UpdateProductDto): void {
        dto.id = id;
        return this.productService.update(dto);
    }
}
