import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert, BeforeUpdate} from "typeorm";
import {IsBoolean, IsInt, IsString, IsUrl, Length, Max, validateOrReject} from "class-validator";


@Entity()
export class Page extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    @IsString()
    @Length(5, 255)
    title: string;

    @Column({type: "varchar", length: 255})
    @IsString()
    @Length(5, 255)
    @IsUrl()
    link: string;

    @Column({type: "bool", default: false})
    @IsBoolean()
    is_publish: boolean;

    @Column({type: "integer", default: 0})
    @IsInt()
    @Max(20)
    status: number;

    @Column({type: "integer"})
    @IsInt()
    created_at: number;

    @Column({type: "integer"})
    @IsInt()
    updated_at: number;

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        await validateOrReject(this);
    }
}