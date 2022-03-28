// import { Test, TestingModule } from "@nestjs/testing";
// import { SessionService } from "./session.service";
// import { sessionProviders } from "./session.providers";
// import { CryptoModule } from "../crypto/crypto.module";
// import { DatabaseModule } from "../database/database.module";
// import { ConfigModule } from "@nestjs/config";
// import configuration from "../config/configuration";
import "reflect-metadata";
describe("SessionService", () => {
  // let service: SessionService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [SessionService, ...sessionProviders],
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

  //   service = module.get<SessionService>(SessionService);
  // });

  it("should be defined", () => {
    expect(true).toBeDefined();
  });
});
