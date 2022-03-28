import { DATABASE_CONNECTION, GEAR_RECORD_REPOSITORY } from "../constants";
import { Connection } from "typeorm";
import { GearRecord } from "./entities/gear-record.entity";

export const gearRecordsProviders = [
  {
    provide: GEAR_RECORD_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getRepository(GearRecord),
    inject: [DATABASE_CONNECTION],
  },
];
