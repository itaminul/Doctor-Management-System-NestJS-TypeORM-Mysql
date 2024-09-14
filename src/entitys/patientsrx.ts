import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Rxmedicine } from './rxmedicine';
import { Rxexaminations } from './rxexaminations';
import { RxInvestigations } from './rxinvestigations';
import { RxAdvice } from './rxadvice';
import { Rxcomplains } from './rxcomplains';

@Entity('patientsrx')
export class Patientsrx {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false})
  RXDATE: string;
  @Column({nullable: true})
  followUp: number;
  @Column({ nullable: true})
  rxStatus: number;
  @Column({default: 1})
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
    eager: true
  })
  rxmedicine: Rxmedicine[]
  @OneToMany(() => Rxexaminations, (rxexaminations) => rxexaminations.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true
  })
  rxexaminations: Rxexaminations[]

  @OneToMany(() => RxInvestigations, (rxInvestigation) => rxInvestigation.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true
  })
  rxInvestigations: RxInvestigations[]

  @OneToMany(() => RxAdvice, (rxAdvice) => rxAdvice.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true
  })
  rxAdvice: RxAdvice[]

  @OneToMany(() => Rxcomplains, (rxComplains) => rxComplains.patientsrx, {
    nullable: true,
    onDelete: 'CASCADE',
    eager: true
  })
  rxComplains: Rxcomplains[]
  
}
