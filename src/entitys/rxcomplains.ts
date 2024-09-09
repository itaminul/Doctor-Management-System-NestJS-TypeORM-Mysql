import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patientsrx } from './patientsrx';
import { Complains } from './complains';

@Entity('rxComplains')
export class Rxcomplains {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx,(patientrx) => patientrx.rxComplains, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'patientsrxid' }) 
  patientsrx: Patientsrx

  @ManyToOne(() => Complains, (complains) => complains.rxComplains, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'complainId' })
  complains: Complains; // Corrected type to Complains

}
