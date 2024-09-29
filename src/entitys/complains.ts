import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Rxcomplains } from './rxcomplains';


@Entity('complains')
export class Complains {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  slNo: number;
  @Column({ nullable: true })
  description: string;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ default: 1})
  doctorId: number
  @Column({ default: 1})
  orgId: number
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;

  @OneToMany(() => Rxcomplains, (rxComplains) => rxComplains.complains, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'complainId' })
  rxComplains: Rxcomplains[];
}
