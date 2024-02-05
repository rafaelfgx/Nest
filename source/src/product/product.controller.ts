import { Controller, Param, Query, Body, Get, Post, Put, Delete, ParseUUIDPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { AddProductRequest } from "./requests/add.product.request";
import { UpdateProductRequest } from "./requests/update.product.request";
import { ListProductRequest } from "./requests/list.product.request";
import { ProductModel } from "./product.model";

@ApiTags("Products")
@ApiBearerAuth()
@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    add(@Body() request: AddProductRequest): string {
        return this.productService.add(request);
    }

    @Delete(":id")
    delete(@Param("id", new ParseUUIDPipe()) id: string): void {
        return this.productService.delete(id);
    }

    @Get(":id")
    get(@Param("id", new ParseUUIDPipe()) id: string): ProductModel | undefined {
        return this.productService.get(id);
    }

    @Get()
    list(@Query() request: ListProductRequest): ProductModel[] | undefined {
        return this.productService.list(request);
    }

    @Put(":id")
    update(@Param("id", new ParseUUIDPipe()) id: string, @Body() request: UpdateProductRequest): void {
        request.id = id;
        return this.productService.update(request);
    }
}
