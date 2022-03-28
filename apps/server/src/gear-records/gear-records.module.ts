import { Module } from "@nestjs/common";
import { GearRecordsService } from "./gear-records.service";
import { GearRecordsResolver } from "./gear-records.resolver";
import { gearRecordsProviders } from "./gear-records.providers";
import { DatabaseModule } from "src/database/database.module";

@Module({
  providers: [GearRecordsResolver, GearRecordsService, ...gearRecordsProviders],
  imports: [DatabaseModule],
})
export class GearRecordsModule {}
