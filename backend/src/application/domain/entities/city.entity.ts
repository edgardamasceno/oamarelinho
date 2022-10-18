import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { State } from './state.entity';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column()
  ibge: number;

  @OneToOne(() => State, { eager: true })
  @JoinColumn({ name: 'state_id' })
  state: State;
}
