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
import { JwtService } from "./jwt/jwt.service";
import { JwtModule } from "./jwt/jwt.module";
import { GearRecordsModule } from "./gear-records/gear-records.module";
import { GearRecordPhotosModule } from './gear-record-photos/gear-record-photos.module';
import configuration from "./common/configuration";

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
    JwtModule,
    GearRecordsModule,
    GearRecordPhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
