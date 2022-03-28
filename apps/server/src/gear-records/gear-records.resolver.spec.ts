import { Test, TestingModule } from "@nestjs/testing";
import { GearRecordsResolver } from "./gear-records.resolver";
import { GearRecordsService } from "./gear-records.service";

describe("GearRecordsResolver", () => {
  let resolver: GearRecordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GearRecordsResolver, GearRecordsService],
    }).compile();

    resolver = module.get<GearRecordsResolver>(GearRecordsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
