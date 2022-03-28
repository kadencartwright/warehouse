import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";

import { User } from "../users/entities/user.entity";
import { CryptoService } from "../crypto/crypto.service";
import { LoginInput } from "./dto/login.input";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private cryptoService: CryptoService
  ) {}

  async authenticateUser({ email, password }: LoginInput): Promise<User> {
    const user = await this.usersService.findOne(email);
    /**
     * if the user exists, and the password is correct, we'll return their info
     * else return null
     */
    if (
      user &&
      (await this.cryptoService.comparePassword(password, user.passwordHash))
    ) {
      return user;
    }
    throw new UnauthorizedException();
  }
}
