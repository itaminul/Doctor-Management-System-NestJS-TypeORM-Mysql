import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Rxmedicine } from './rxmedicine';
import { Doctor } from './doctor';

@Entity('medicine')
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  medicineName: string;
  @Column({ nullable: true })
  slNo: number;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  medicineGenericeId: number;
  @Column({ nullable: true })
  manufacturerId: number;
  @Column({ nullable: true })
  categoryId: number;
  @Column({ nullable: true })
  strength: string;
  @Column({ default: 1 })
  orgId: number;
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
  @OneToMany(() => Rxmedicine, (rxMedicine) => rxMedicine.medicine, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'medicineId' })
  rxMedicine: Rxmedicine[];

  @ManyToOne(() => Doctor, (doc) => doc.medicine, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'doctorId' })
  doctor: Doctor;
}
