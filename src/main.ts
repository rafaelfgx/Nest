import { NestFactory } from "@nestjs/core";
import { VersioningType, ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableVersioning({ type: VersioningType.URI, defaultVersion: "1" });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.use(helmet());
    SwaggerModule.setup("", app, SwaggerModule.createDocument(app, new DocumentBuilder().setTitle("API").addBearerAuth().build()));
    await app.listen(3000);
}

bootstrap();
