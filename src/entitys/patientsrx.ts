import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Rxmedicine } from './rxmedicine';
import { Rxexaminations } from './rxexaminations';
import { RxInvestigations } from './rxinvestigations';
import { RxAdvice } from './rxadvice';
import { Rxcomplains } from './rxcomplains';
import { pat_patients_info } from './pat_patients_info';
import { RxOnExamination } from './rxonExamination';
import { RxPlain } from './rxPlan';
import { RxPackage } from './rxPackages';

@Entity('patientsrx')
export class Patientsrx {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  RXDATE: string;
  @Column({ nullable: true })
  followUp: number;
  @Column({ nullable: true })
  rxStatus: number;
  @Column({ nullable: true })
  followupStates: string;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @OneToMany(() => Rxmedicine, (rxmedicine) => rxmedicine.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxmedicine: Rxmedicine[];

  @OneToMany(
    () => Rxexaminations,
    (rxexaminations) => rxexaminations.patientsrx,
    {
      nullable: true,
      onDelete: 'CASCADE',
      eager: true,
    },
  )
  rxexaminations: Rxexaminations[];

  @OneToMany(
    () => RxInvestigations,
    (rxInvestigation) => rxInvestigation.patientsrx,
    {
      nullable: true,
      onDelete: 'CASCADE',
      eager: true,
    },
  )
  rxInvestigations: RxInvestigations[];

  @OneToMany(() => RxAdvice, (rxAdvice) => rxAdvice.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxAdvice: RxAdvice[];

  @OneToMany(() => Rxcomplains, (rxComplains) => rxComplains.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxComplains: Rxcomplains[];

  @ManyToOne(
    () => pat_patients_info,
    (patPatientInfo) => patPatientInfo.patientsrx,
    {
      nullable: true,
      onDelete: 'CASCADE',
      eager: true,
    },
  )
  @JoinColumn({ name: 'patientId' })
  patPatientInfo: pat_patients_info;
  @Column({ nullable: true })
  patientId: number;

  @OneToMany(() => RxOnExamination, (rxOnExa) => rxOnExa.patientRx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxOnExamination: RxOnExamination[];

  @OneToMany(() => RxPlain, (rxPlain) => rxPlain.patientRx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxPlain: RxPlain[];

  @OneToMany(() => RxPackage, (rxPackage) => rxPackage.patientRx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  rxPackage: RxPackage[];
}

