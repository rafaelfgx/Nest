import { Injectable } from "@nestjs/common";
import { AddProductDto } from "./dtos/add.product.dto";
import { UpdateProductDto } from "./dtos/update.product.dto";
import { ListProductDto } from "./dtos/list.product.dto";
import { ProductRepository } from "./product.repository";
import { ProductDto } from "./dtos/product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    add(dto: AddProductDto): string {
        return this.productRepository.add({ ...dto, id: "" });
    }

    delete(id: string): void {
        return this.productRepository.delete(id);
    }

    get(id: string): ProductDto | undefined {
        return this.productRepository.get(id);
    }

    list(dto: ListProductDto): ProductDto[] | undefined {
        console.log(dto);
        return this.productRepository.list();
    }

    update(dto: UpdateProductDto): void {
        return this.productRepository.update({ ...dto });
    }
}
