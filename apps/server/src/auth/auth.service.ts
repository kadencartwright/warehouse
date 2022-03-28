import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

import { User } from "../users/entities/user.entity";
import { CryptoService } from "../crypto/crypto.service";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private cryptoService: CryptoService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, "passwordHash">> {
    const user = await this.usersService.findOne(email);
    /**
     * if the user exists, and the password is correct, we'll return their info
     * else return null
     */
    if (
      user &&
      (await this.cryptoService.comparePassword(password, user.passwordHash))
    ) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }
}
