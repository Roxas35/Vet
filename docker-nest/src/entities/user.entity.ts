import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Owner } from "./owner.entity"

@Entity()
export class User {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    email: string

    @Column({nullable: false, default: ''})
    password: string

    @OneToOne(() => Owner)
    @JoinColumn()
    owner: Owner

}