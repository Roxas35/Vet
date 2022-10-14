import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { Specialtie } from "./specialties.entity"

@Entity()
export class Vet {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    first_name: string

    @Column({nullable: false, default: ''})
    last_name: string

    @ManyToMany(() => Specialtie)
    @JoinTable()
    specialtie: Specialtie

}
