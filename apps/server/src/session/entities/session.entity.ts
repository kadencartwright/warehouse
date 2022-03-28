import { User } from "../../users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

// for now i'll store this in postgres for simplicity, but changing this to redis later would be pretty trivial
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
