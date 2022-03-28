import { User } from "../../users/entities/user.entity";
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

  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @Column({ default: "NOW()" })
  createdAt: Date;

  @Column()
  cookieValue: string;

  @Column()
  expiresAt: Date;
}
