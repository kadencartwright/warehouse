import { Test, TestingModule } from "@nestjs/testing";
import { hashSync } from "bcrypt";
import { CryptoService } from "./crypto.service";
import "reflect-metadata";

describe("CryptoService", () => {
  let service: CryptoService;
  const plain = "testPssword!!23$";
  const hash = hashSync(plain, 10);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should compare a password properly", async () => {
    expect(await service.comparePassword(plain, hash)).toBe(true);
  });

  it("should hash a password properly", async () => {
    expect(
      await service.comparePassword(plain, await service.hashPassword(plain))
    ).toBe(true);
  });
});
