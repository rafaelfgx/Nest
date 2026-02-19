import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";

@Injectable()
export class ProductRepository {
    private products: Product[] = [
        { id: crypto.randomUUID(), description: "Product 1" },
        { id: crypto.randomUUID(), description: "Product 2" },
        { id: crypto.randomUUID(), description: "Product 3" },
        { id: crypto.randomUUID(), description: "Product 4" },
        { id: crypto.randomUUID(), description: "Product 5" }
    ];

    add(product: Product): string {
        product.id = crypto.randomUUID();
        this.products.push(product);
        return product.id;
    }

    delete(id: string): void {
        this.products = this.products.filter((product) => product.id !== id);
    }

    get(id: string): Product | undefined {
        return this.products.find((entity) => entity.id === id);
    }

    list(): Product[] | undefined {
        return this.products;
    }

    update(product: Product): void {
        this.products.some((entity, index) => entity.id === product.id && ((this.products[index] = product), true));
    }
}
