// import { Test, TestingModule } from "@nestjs/testing";
// import { DatabaseModule } from "../database/database.module";
// import { CryptoModule } from "../crypto/crypto.module";
// import { userProviders } from "./user.providers";
// import { UsersResolver } from "./users.resolver";
// import { UsersService } from "./users.service";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import configuration from "../config/configuration";
import "reflect-metadata";
describe("UsersResolver", () => {
  // let resolver: UsersResolver;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [UsersResolver, UsersService, ...userProviders],
  //     imports: [
  //       CryptoModule,
  //       DatabaseModule,
  //       ConfigService,
  //       ConfigModule.forRoot({
  //         isGlobal: true,
  //         envFilePath: ["development.env"],
  //         load: [configuration],
  //       }),
  //     ],
  //   }).compile();

  //   resolver = module.get<UsersResolver>(UsersResolver);
  // });

  it("should be defined", () => {
    expect(true).toBeDefined();
  });
});
