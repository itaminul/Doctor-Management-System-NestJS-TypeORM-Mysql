import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RxOnExamination } from './rxonExamination';

@Entity('SetOnExamination')
export class SetOnExamination {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  slNo: number;
  @Column()
  remarks: string;
  @Column()
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;

  @OneToMany(() => RxOnExamination, (rxOnExam) => rxOnExam.setOnExaminations, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'onExaminationId' })
  rxOnExaminations: RxOnExamination[];
}
