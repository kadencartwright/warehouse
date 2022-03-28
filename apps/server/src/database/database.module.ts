import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseProviders } from "./database.providers";

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
  imports: [ConfigModule],
})
export class DatabaseModule {}
