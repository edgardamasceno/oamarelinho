import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { State } from './state.entity';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ fulltext: true })
  name: string;

  @Column({ name: 'name_pt-br' })
  namePtBR: string;

  @Column()
  initials: string;

  @Column()
  bacen: number;
}
