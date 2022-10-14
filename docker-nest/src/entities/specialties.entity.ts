import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Specialtie {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    name: string

}
