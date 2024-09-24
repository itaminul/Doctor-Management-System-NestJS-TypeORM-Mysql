import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class Users {  
        @PrimaryGeneratedColumn()
        id: bigint;
        @Column({ default: 1})
        old_new_status: number;
        @Column()
        name:  string;
        @Column()
        email: string;
        @Column()
        email_address: string;
        @Column()
        email_verified_at: Date;
        @Column()
        password: string;
        @Column()
        image: string;
        @Column()
        signature: string;
        @Column()
        address: string;
        @Column()
        phase_no: number;
        @Column({ default: 1})
        doctorId: number;
        @Column({ default: 1})
        org_id: number;
        @Column()
        course_type: number;
        @Column()
        course_name: number;
        @Column()
        contact_no: string;
        @Column()
        department_id: number;
        @Column()
        batch_id: number;
        @Column()
        student_id: number;
        @Column()
        student_type: number;
        @Column()
        USERGRP_ID: number;
        @Column()
        USERLVL_ID: number;
        @Column()
        designation: number;
        @Column()
        roll_id: number;
        @Column()
        remember_token: string;
        @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
        created_at: Date;
        @Column({ type: 'datetime', nullable: true})
        updated_at: Date;
        @Column({ default:1})
        active_status: number;
        @Column({default: 0})
        is_admin: number
        @Column()
        mobile_manufacture: string;
        @Column()
        os_version: string;
        @Column()
        os_type: string;
        @Column()
        app_version: string;
        @Column()
        fcm_reg_id: string;
        @Column()
        maver_code: string;
        @Column()
        last_login: string;
        @Column({ type: 'time', nullable: true})
        reset_token_expires_at: Date 
        @Column()
        is_patient: number;
        @Column()
        reset_token: string;
}