import { Module } from "@nestjs/common";
import { CryptoModule } from "../crypto/crypto.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { SessionModule } from "src/session/session.module";

@Module({
  imports: [CryptoModule, UsersModule, SessionModule],
  providers: [AuthService, AuthResolver],
  exports: [AuthService],
})
export class AuthModule {}
