import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Medicine } from './medicine';
import { Patientsrx } from './patientsrx';
import { pat_patients_info } from './pat_patients_info';

@Entity('doctor')
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  degree_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  sl_no: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  remarks: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  gender: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  age: string;

  @Column({ type: 'tinyint', default: 1 })
  active_status: boolean;

  @Column()
  address: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  mobile_no: string;

  @Column({ type: 'int', nullable: true })
  created_by: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;

  @OneToMany(() => Medicine, (medi) => medi.doctor, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  medicine: Medicine[];

  @OneToMany(() => pat_patients_info, patientInfo => patientInfo.patPatienInfo)
  doctorInfo: pat_patients_info[];
}
