import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { RxInvestigations } from './rxinvestigations';

@Entity('setInvestigations')
export class Set_investigations {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  slNo: number;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @OneToMany(() => RxInvestigations, (rxInves) => rxInves.setInvestigations, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'investigationId' })
  rxInvestigations: Set_investigations[];
}
