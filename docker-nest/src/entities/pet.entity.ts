import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, ManyToOne, OneToMany } from "typeorm"
import { Owner } from "./owner.entity"
import { Type } from "./type.entity"
import { Visit } from "./visits.entitiy"

@Entity()
export class Pet {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    name: string

    @Column({nullable: false, default: ''})
    birthdate: string

    @OneToOne(() => Type)
    @JoinColumn()
    type: Type

    @ManyToOne(() => Owner, owner => owner.pets)
    owner: Owner

    @OneToMany(() => Visit, visit => visit.pet)
    visit: Visit

}