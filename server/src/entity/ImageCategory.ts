import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, BeforeInsert, BeforeUpdate} from "typeorm";
import {Image} from "./Image";
import {IsBoolean, IsInt, IsString, Length, Max, validateOrReject} from "class-validator";

@Entity()
export class ImageCategory extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    @IsString()
    @Length(5, 255)
    name: string;

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

    @ManyToMany(type => Image, image => image.categories)
    images: Image[];

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        await validateOrReject(this);
    }
}