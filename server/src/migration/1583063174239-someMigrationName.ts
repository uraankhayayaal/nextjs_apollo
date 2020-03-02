import {MigrationInterface, QueryRunner} from "typeorm";

export class someMigrationName1583063174239 implements MigrationInterface {
    name = 'someMigrationName1583063174239'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `article` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `photo` varchar(255) NOT NULL, `is_publish` tinyint NOT NULL, `status` int NOT NULL, `created_at` int NOT NULL, `updated_at` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `article`", undefined);
    }

}
