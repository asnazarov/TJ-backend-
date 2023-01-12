import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {IsEmail} from "class-validator";
export const USERS = 'users'

@Entity(USERS)
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email:string

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}


// import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
//
// @Entity()
// export class User {
//   @PrimaryGeneratedColumn({
//     type: 'bigint',
//     name: 'user_id',
//   })
//   id: number;
//
//   @Column({
//     nullable: false,
//     default: '',
//   })
//   username: string;
//
//   @Column({
//     name: 'email_address',
//     nullable: false,
//     default: '',
//   })
//   email: string;
//
//   @Column({
//     nullable: false,
//     default: '',
//   })
//   password: string;
// }
