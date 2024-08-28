import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usertable {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  name: string;
  
  @Column()
  fullName: string;

  @Column()
  email: string;
}
