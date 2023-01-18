import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService)
  const port = config.get<number>('API_PORT')
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log(`Было запущено на порту: ${port}`)
  });
}
bootstrap();



// "typeorm": "^0.2.45"