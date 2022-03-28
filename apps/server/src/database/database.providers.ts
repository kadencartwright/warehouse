import { ConfigService } from "@nestjs/config";
import { join } from "path";
import { DATABASE_CONNECTION } from "../constants";
import { createConnection } from "typeorm";

export const DatabaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      return await createConnection({
        type: "postgres",
        host: configService.get<string>("database.host"),
        port: 5432,
        username: configService.get<string>("database.user"),
        password: configService.get<string>("database.password"),
        database: configService.get<string>("database.name"),
        entities: [join(__dirname, "../", "**", "*.entity.{ts,js}")],
        synchronize: true,
      });
    },
    inject: [ConfigService],
  },
];
