import { DATABASE_CONNECTION, SESSION_REPOSITORY } from "../constants";
import { Connection } from "typeorm";
import { Session } from "./entities/session.entity";

export const sessionProviders = [
  {
    provide: SESSION_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Session),
    inject: [DATABASE_CONNECTION],
  },
];
