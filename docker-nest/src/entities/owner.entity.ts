import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Pet } from "./pet.entity"


@Entity()
export class Owner {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    firstname: string

    @Column({nullable: false, default: ''})
    lastname: string

    @Column({nullable: false, default: ''})
    address: string

    @Column({nullable: false, default: ''})
    city: string

    @Column({nullable: false, default: ''})
    telephone: string

    @OneToMany(() => Pet, pet => pet.owner)
    pets: Pet

}