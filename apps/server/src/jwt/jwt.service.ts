import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { sign } from "jsonwebtoken";
import { User } from "src/users/entities/user.entity";
export type TokenData = { user: User };
@Injectable()
export class JwtService {
  secret: string;
  constructor(private readonly configService: ConfigService) {
    this.secret = configService.get<string>("jwt.secret");
  }
  issueToken(user: User) {
    const tokenData: TokenData = { user };
    return sign(tokenData, this.secret, { expiresIn: "60m" });
  }
}
