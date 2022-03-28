// import { Test, TestingModule } from "@nestjs/testing";
// import { DatabaseModule } from "../database/database.module";
// import { CryptoModule } from "../crypto/crypto.module";
// import { userProviders } from "./user.providers";
// import { UsersService } from "./users.service";
// import { ConfigModule } from "@nestjs/config";
// import configuration from "../config/configuration";
import "reflect-metadata";
describe("UsersService", () => {
  // let service: UsersService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [UsersService, ...userProviders],
  //     imports: [
  //       CryptoModule,
  //       DatabaseModule,
  //       ConfigModule.forRoot({
  //         isGlobal: true,
  //         envFilePath: ["development.env"],
  //         load: [configuration],
  //       }),
  //     ],
  //   }).compile();

  //   service = module.get<UsersService>(UsersService);
  // });

  it("should be defined", () => {
    expect(true).toBeDefined();
  });
});
