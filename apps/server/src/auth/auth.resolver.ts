import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { JwtService } from "src/jwt/jwt.service";
import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { AuthPayload } from "./entities/authPayload.entity";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService
  ) {}
  @Mutation(() => AuthPayload)
  async login(@Args("loginInput") loginInput: LoginInput) {
    const user = await this.authService.authenticateUser(loginInput);

    const token = this.jwtService.issueToken(user);
    return { token } as AuthPayload;
  }
}
