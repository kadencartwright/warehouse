import {
  DATABASE_CONNECTION,
  GEAR_RECORD_PHOTO_REPOSITORY,
} from "../constants";
import { Connection } from "typeorm";

import { GearRecordPhoto } from "./entities/gear-record-photo.entity";

export const gearRecordPhotosProviders = [
  {
    provide: GEAR_RECORD_PHOTO_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(GearRecordPhoto),
    inject: [DATABASE_CONNECTION],
  },
];
