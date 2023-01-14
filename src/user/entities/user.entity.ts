import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string

  @Column()
  password: string;

  @Column({default: true})
  isActive: boolean;

  @CreateDateColumn({type: "timestamp"})
  createdAt: Date

  @UpdateDateColumn({type: "timestamp"})
  updatedAt: Date
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
