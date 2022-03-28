import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";
@Injectable()
export class CryptoService {
  /** basic wrapper around bcrypt compare */
  async comparePassword(plaintext: string, hash: string): Promise<boolean> {
    return await compare(plaintext, hash);
  }
  /** basic wrapper around bcrypt hash, with app wid */
  async hashPassword(plaintext: string): Promise<string> {
    return await hash(plaintext, 10);
  }
}
