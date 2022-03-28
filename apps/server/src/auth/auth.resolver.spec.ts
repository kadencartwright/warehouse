import { Test, TestingModule } from "@nestjs/testing";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { SessionModule } from "../session/session.module";
import { UsersModule } from "../users/users.module";
import { CryptoModule } from "../crypto/crypto.module";
import configuration from "../config/configuration";
import { ConfigModule } from "@nestjs/config";

describe("AuthResolver", () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
      imports: [
        SessionModule,
        UsersModule,
        CryptoModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ["development.env"],
          load: [configuration],
        }),
      ],
    }).compile();
    resolver = module.get<AuthResolver>(AuthResolver);
  }, 10000);

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  }, 10000);
});
