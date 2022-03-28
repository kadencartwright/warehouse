import { Module } from "@nestjs/common";
import { SessionService } from "./session.service";
import { sessionProviders } from "./session.providers";
import { CryptoModule } from "../crypto/crypto.module";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [CryptoModule, DatabaseModule],
  providers: [SessionService, ...sessionProviders],
  exports: [...sessionProviders, SessionService],
})
export class SessionModule {}
