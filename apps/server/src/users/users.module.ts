import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { userProviders } from "./user.providers";
import { DatabaseModule } from "../database/database.module";
import { CryptoModule } from "../crypto/crypto.module";
@Module({
  imports: [DatabaseModule, CryptoModule],
  providers: [UsersResolver, UsersService, ...userProviders],
  exports: [UsersService],
})
export class UsersModule {}
