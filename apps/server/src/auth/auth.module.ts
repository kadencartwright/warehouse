import { Module } from "@nestjs/common";
import { CryptoModule } from "../crypto/crypto.module";
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { JwtModule } from "src/jwt/jwt.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [CryptoModule, UsersModule, PassportModule, JwtModule, ConfigModule],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
