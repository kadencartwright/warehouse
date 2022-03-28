import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import configuration from "../common/configuration";
import { JwtService } from "./jwt.service";

describe("JwtService", () => {
  let service: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtService],
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ["development.env"],
          load: [configuration],
        }),
      ],
    }).compile();

    service = module.get<JwtService>(JwtService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
