import { Pet } from "src/entities/pet.entity"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Visit {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    visit_date: string

    @Column({ nullable: false, default:''})
    description: string

    @ManyToOne(() => Pet, pet => pet.visit)
    pet: Pet


}
