import { ConfigService } from "@nestjs/config";
import { Configuration } from "src/config/configuration";
import { DATABASE_CONNECTION } from "src/constants";
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
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      });
    },
    inject: [ConfigService],
  },
];
