import { Injectable } from "@nestjs/common";
import { copyProperties } from "src/shared/functions";
import { AddProductRequest } from "./requests/add.product.request";
import { UpdateProductRequest } from "./requests/update.product.request";
import { ListProductRequest } from "./requests/list.product.request";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entity";
import { ProductModel } from "./product.model";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    add(request: AddProductRequest): string {
        const product = copyProperties(request, new Product());

        return this.productRepository.add(product);
    }

    delete(id: string): void {
        return this.productRepository.delete(id);
    }

    get(id: string): ProductModel | undefined {
        const product = this.productRepository.get(id);

        return copyProperties(product, new ProductModel());
    }

    list(request: ListProductRequest): ProductModel[] | undefined {
        console.log(request);

        const products = this.productRepository.list();

        return products?.map((product) => copyProperties(product, new ProductModel()));
    }

    update(request: UpdateProductRequest): void {
        const product = copyProperties(request, new Product());

        return this.productRepository.update(product);
    }
}
