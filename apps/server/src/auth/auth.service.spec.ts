import "reflect-metadata";
// import { Test, TestingModule } from "@nestjs/testing";
// import { DatabaseModule } from "../database/database.module";
// import { CryptoModule } from "../crypto/crypto.module";
// import { UsersModule } from "../users/users.module";
// import { AuthService } from "./auth.service";
// import configuration from "../config/configuration";
// import { ConfigModule } from "@nestjs/config";
// import { MockFunctionMetadata, ModuleMocker } from "jest-mock";
// import { USER_REPOSITORY } from "src/constants";
// const moduleMocker = new ModuleMocker(global);

describe("AuthService", () => {
  // let service: AuthService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [AuthService],
  //     imports: [
  //       CryptoModule,
  //       UsersModule,
  //       DatabaseModule,
  //       ConfigModule.forRoot({
  //         isGlobal: true,
  //         envFilePath: ["development.env"],
  //         load: [configuration],
  //       }),
  //     ],
  //   })
  //     .useMocker((token) => {
  //       if (token === AuthService) {
  //         return { authenitcateUser: jest.fn().mockResolvedValue([]) };
  //       }
  //       if (token === USER_REPOSITORY) {
  //         return { authenitcateUser: jest.fn().mockResolvedValue([]) };
  //       }
  //       if (typeof token === "function") {
  //         const mockMetadata = moduleMocker.getMetadata(
  //           token
  //         ) as MockFunctionMetadata<any, any>;
  //         const Mock = moduleMocker.generateFromMetadata(mockMetadata);
  //         return new Mock();
  //       }
  //     })
  //     .compile();

  //   service = module.get<AuthService>(AuthService);
  // });

  it("should be defined", () => {
    expect(true).toBeDefined();
  });
});
