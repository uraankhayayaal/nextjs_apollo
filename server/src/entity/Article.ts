import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert, BeforeUpdate} from "typeorm";
import {IsBoolean, IsInt, IsString, IsUrl, Length, Max, Min, validateOrReject} from "class-validator";

@Entity()
export class Article extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    @IsString()
    @Length(5, 255)
    title: string;

    @Column("text")
    @Length(0, 20000)
    @IsString()
    content: string;
    
    @Column({type: "varchar", length: 255})
    @Length(0, 255)
    @IsString()
    @IsUrl()
    photo: string;
    
    @Column({type: "bool", default: false})
    @IsBoolean()
    is_publish: boolean;
    
    @Column({type: "integer", default: 0})
    @IsInt()
    @Max(20)
    status: number;

    @Column({type: "integer"})
    @IsInt()
    @Min(46915200)
    created_at: number;

    @Column({type: "integer"})
    @IsInt()
    @Min(46915200)
    updated_at: number;

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        await validateOrReject(this);
    }
}
