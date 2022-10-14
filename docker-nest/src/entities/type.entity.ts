import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Type {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Column({nullable: false, default: ''})
    name: string

}
