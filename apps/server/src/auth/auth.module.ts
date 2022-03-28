import { Module } from "@nestjs/common";
import { CryptoModule } from "../crypto/crypto.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { SessionService } from "../session/session.service";

@Module({
  imports: [CryptoModule, UsersModule],
  providers: [AuthService, AuthResolver],
  exports: [AuthService, SessionService],
})
export class AuthModule {}
