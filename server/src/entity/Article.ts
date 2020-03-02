import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Article extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    title: string;

    @Column("text")
    content: string;
    
    @Column()
    photo: string;
    
    @Column({type: "bool", default: false})
    is_publish: boolean;
    
    @Column({type: "integer", default: 0})
    status: number;

    @Column({type: "integer"})
    created_at: number;

    @Column({type: "integer"})
    updated_at: number;
}
