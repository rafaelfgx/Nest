import { TestingModule, Test } from "@nestjs/testing";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

describe("ProductController", () => {
    let controller: ProductController;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [ProductRepository, ProductService]
        }).compile();

        controller = module.get<ProductController>(ProductController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
