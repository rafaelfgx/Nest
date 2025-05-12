import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true, cache: true }), CacheModule.register(), AuthModule, UserModule, ProductModule]
})
export class AppModule {}
