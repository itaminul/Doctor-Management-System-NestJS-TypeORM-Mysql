import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patientsrx } from './patientsrx';
import { SetOnExamination } from './setOnExamination';

@Entity('rxOnExaminations')
export class RxOnExamination {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: 1 })
  doctorId: number;
  @Column({ default: 1 })
  orgId: number;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx, (patientRx) => patientRx.rxOnExamination)
  patientRx: Patientsrx;
  @ManyToOne(() => SetOnExamination, (setOnExa) => setOnExa.rxOnExaminations, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'onExaminationId' })
  setOnExaminations: SetOnExamination[];
}
