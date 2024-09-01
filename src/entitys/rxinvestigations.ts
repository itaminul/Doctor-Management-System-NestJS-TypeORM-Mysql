import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patientsrx } from './patientsrx';

@Entity('rxInvestigations')
export class RxInvestigations {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true})
  investigationId: number;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx,(patientrx) => patientrx.rxInvestigations, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'patientsrxid' }) 
  patientsrx: Patientsrx

}
