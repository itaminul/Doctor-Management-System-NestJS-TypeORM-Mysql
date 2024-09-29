import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterMedicineTables1727066590060 implements MigrationInterface {
    name = 'AlterMedicineTables1727066590060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add the new columns to the medicine table
        await queryRunner.query(`ALTER TABLE \`medicine\` ADD \`doctorId\` int NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`medicine\` ADD \`orgId\` int NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove the columns if rolling back
        await queryRunner.query(`ALTER TABLE \`medicine\` DROP COLUMN \`orgId\``);
        await queryRunner.query(`ALTER TABLE \`medicine\` DROP COLUMN \`doctorId\``);
    }
}
