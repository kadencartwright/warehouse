import { Module } from "@nestjs/common";
import { GearRecordsService } from "./gear-records.service";
import { GearRecordsResolver } from "./gear-records.resolver";

@Module({
  providers: [GearRecordsResolver, GearRecordsService],
})
export class GearRecordsModule {}
