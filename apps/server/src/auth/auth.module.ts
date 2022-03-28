import { Module } from "@nestjs/common";
import { CryptoModule } from "src/crypto/crypto.module";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";

@Module({
  imports: [CryptoModule, UsersModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
