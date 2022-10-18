import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Country } from './country.entity';

@Entity('state')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column()
  @Index({ fulltext: true })
  uf: string;

  @Column()
  @Index({ fulltext: true })
  ddd: string;

  @Column()
  ibge: number;

  @OneToOne(() => Country, { eager: true })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
