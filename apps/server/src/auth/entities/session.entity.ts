import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("sessions")
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @JoinColumn()
  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @Column({ default: "NOW()" })
  createdAt: Date;

  @Column()
  cookieValue: string;

  @Column()
  expiresAt: Date;
}
