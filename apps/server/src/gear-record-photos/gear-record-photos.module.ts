import { Module } from "@nestjs/common";
import { GearRecordPhotosService } from "./gear-record-photos.service";
import { GearRecordPhotosResolver } from "./gear-record-photos.resolver";
import { gearRecordPhotosProviders } from "./gear-record-photos.providers";
import { DatabaseModule } from "src/database/database.module";
import { FileSystemModule } from "src/file-system/file-system.module";

@Module({
  providers: [
    GearRecordPhotosResolver,
    GearRecordPhotosService,
    ...gearRecordPhotosProviders,
  ],
  imports: [DatabaseModule, FileSystemModule],
})
export class GearRecordPhotosModule {}
