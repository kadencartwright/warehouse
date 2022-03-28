import { Test, TestingModule } from "@nestjs/testing";
import { GearRecordsService } from "./gear-records.service";

describe("GearRecordsService", () => {
  let service: GearRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRecordsService],
    }).compile();

    service = module.get<GearRecordsService>(GearRecordsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
