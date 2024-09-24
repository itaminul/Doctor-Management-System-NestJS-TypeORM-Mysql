import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Patientsrx } from './patientsrx';
import { SetAdvice } from './setAdvice';

@Entity('rxAdvice')
export class RxAdvice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: 1})
  doctorId: number
  @Column({ default: 1})
  orgId: number
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx, (patientrx) => patientrx.rxAdvice, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientsrxid' })
  patientsrx: Patientsrx;

  @ManyToOne(() => SetAdvice, (advice) => advice.rxAdvice, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'adviceId' })
  setAdvice: SetAdvice;
}
