import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RxAdvice } from "./rxadvice";

@Entity('setAdvaice')

export class SetAdvice{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    description: string
    @Column()
    slNo: number
    @Column()
    remarks: string
    activeStatus: number;
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
    @Column({ type: 'int', nullable: true })
    updated_by: number;
    @Column({ type: 'datetime', nullable: true })
    updated_at: Date;

    @OneToMany(() => RxAdvice, (rxAdvice) => rxAdvice.setAdvice, {
        nullable: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'adviceId'})
    rxAdvice: RxAdvice[]
}