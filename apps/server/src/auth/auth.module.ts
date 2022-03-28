import { Module } from "@nestjs/common";
import { CryptoModule } from "src/crypto/crypto.module";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { SessionService } from "src/session/session.service";

@Module({
  imports: [CryptoModule, UsersModule],
  providers: [AuthService, AuthResolver],
  exports: [AuthService, SessionService],
})
export class AuthModule {}
