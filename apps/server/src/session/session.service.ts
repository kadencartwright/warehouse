import { Inject, Injectable } from "@nestjs/common";
import { SESSION_REPOSITORY } from "../constants";
import { CryptoService } from "../crypto/crypto.service";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { Session } from "./entities/session.entity";
import { Dayjs } from "dayjs";
@Injectable()
export class SessionService {
  constructor(
    @Inject(SESSION_REPOSITORY)
    private sessionRepository: Repository<Session>,
    private cryptoService: CryptoService
  ) {}

  async create({ user }: { user: User }) {
    const cookieValue = this.cryptoService.generateSessionCookie();
    const expiresAt = new Dayjs().add(30, "day").toDate();
    const session = await this.sessionRepository.create({
      user,
      cookieValue,
      expiresAt,
    });
    return session;
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
