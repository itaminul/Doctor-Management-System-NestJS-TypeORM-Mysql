import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patientsrx } from './patientsrx';

@Entity('rxexaminations')
export class Rxexaminations {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true})
  examinationId: number;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx,(patientrx) => patientrx.rxexaminations, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'patientsrxid' }) 
  patientsrx: Patientsrx
}
