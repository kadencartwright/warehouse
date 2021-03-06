import { Test, TestingModule } from "@nestjs/testing";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { CryptoModule } from "../crypto/crypto.module";
import configuration from "../common/configuration";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "../jwt/jwt.module";

describe("AuthResolver", () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
      imports: [
        UsersModule,
        CryptoModule,
        JwtModule,
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
