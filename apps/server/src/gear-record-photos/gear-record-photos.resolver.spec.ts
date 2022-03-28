import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import configuration from "../common/configuration";
import { DatabaseModule } from "../database/database.module";
import { gearRecordPhotosProviders } from "./gear-record-photos.providers";
import { GearRecordPhotosResolver } from "./gear-record-photos.resolver";
import { GearRecordPhotosService } from "./gear-record-photos.service";

describe("GearRecordPhotosResolver", () => {
  let resolver: GearRecordPhotosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GearRecordPhotosResolver,
        GearRecordPhotosService,
        ...gearRecordPhotosProviders,
      ],
      imports: [
        DatabaseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ["development.env"],
          load: [configuration],
        }),
      ],
    }).compile();

    resolver = module.get<GearRecordPhotosResolver>(GearRecordPhotosResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
