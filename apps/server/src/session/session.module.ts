import { Module } from "@nestjs/common";
import { SessionService } from "./session.service";
import { sessionProviders } from "./session.providers";
import { CryptoService } from "src/crypto/crypto.service";

@Module({
  imports: [CryptoService],
  providers: [SessionService, ...sessionProviders],
  exports: [...sessionProviders],
})
export class SessionModule {}
