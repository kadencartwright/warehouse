import { ConfigModule } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import configuration from "../common/configuration";
import { DatabaseModule } from "../database/database.module";
import { gearRecordPhotosProviders } from "./gear-record-photos.providers";
import { GearRecordPhotosService } from "./gear-record-photos.service";

describe("GearRecordPhotosService", () => {
  let service: GearRecordPhotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRecordPhotosService, ...gearRecordPhotosProviders],
      imports: [
        DatabaseModule,
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ["development.env"],
          load: [configuration],
        }),
      ],
    }).compile();

    service = module.get<GearRecordPhotosService>(GearRecordPhotosService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
