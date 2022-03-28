import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { CryptoModule } from "./crypto/crypto.module";
import configuration from "./config/configuration";

@Module({
  imports: [
    AuthModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ["development.env"],
      load: [configuration],
    }),
    DatabaseModule,
    CryptoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
