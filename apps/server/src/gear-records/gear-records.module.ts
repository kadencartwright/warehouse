import { Module } from "@nestjs/common";
import { GearRecordsService } from "./gear-records.service";
import { GearRecordsResolver } from "./gear-records.resolver";
import { gearRecordsProviders } from "./gear-records.providers";

@Module({
  providers: [GearRecordsResolver, GearRecordsService, ...gearRecordsProviders],
})
export class GearRecordsModule {}
