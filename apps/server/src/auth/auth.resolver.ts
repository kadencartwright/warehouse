import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { SessionService } from "src/session/session.service";
import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { AuthPayload } from "./entities/authPayload.entity";

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService
  ) {}
  @Mutation(() => AuthPayload)
  async login(@Args("createUserInput") loginInput: LoginInput) {
    const user = await this.authService.authenticateUser(loginInput);
    const session = await this.sessionService.create({ user });
    return { cookie: session.cookieValue } as AuthPayload;
  }
}
