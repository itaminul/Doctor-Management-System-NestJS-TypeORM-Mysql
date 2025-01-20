import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RxAdvice } from './rxadvice';
import { RxPackage } from './rxPackages';

@Entity('setPackage')
export class SetPackage {
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

  @OneToMany(() => RxPackage, (rxPac) => rxPac.setPackage, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'packageId' })
  rxAdvice: RxPackage[];
}
