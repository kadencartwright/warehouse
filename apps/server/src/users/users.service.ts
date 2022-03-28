import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "../constants";
import { CryptoService } from "../crypto/crypto.service";
import { Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
    private cryptoService: CryptoService
  ) {}
  async create(createUserInput: CreateUserInput) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, passwordConfirmation, ...rest } = createUserInput;
    const passwordHash = await this.cryptoService.hashPassword(password);
    const user = this.userRepository.create({
      ...rest,
      passwordHash,
    });
    return await this.userRepository.save(user);
  }
  async findAll() {
    return this.userRepository.find();
  }

  async findOne(email: User["email"]) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async update(email: User["email"], updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.update({ email }, updateUserInput);
    return user;
  }

  async remove(email: User["email"]) {
    const user = await this.userRepository.findOneOrFail({ where: { email } });
    return await this.userRepository.remove(user);
  }
}
