import "reflect-metadata";
import { Test, TestingModule } from "@nestjs/testing";
import { DatabaseModule } from "../database/database.module";
import { CryptoModule } from "../crypto/crypto.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import configuration from "../config/configuration";
import { ConfigModule } from "@nestjs/config";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [
        CryptoModule,
        UsersModule,
        DatabaseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ["development.env"],
          load: [configuration],
        }),
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
