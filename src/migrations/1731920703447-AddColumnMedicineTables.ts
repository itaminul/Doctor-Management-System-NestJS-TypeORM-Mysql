import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnMedicineTables1731920703447 implements MigrationInterface {
    name = 'AddColumnMedicineTables1731920703447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medicine\` ADD \`priorityStatus\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medicine\` DROP COLUMN \`priorityStatus\``);
    }

}
