import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDoctorIdInAndOrgIdRxComplainTables1727174323647 implements MigrationInterface {
    name = 'AddDoctorIdInAndOrgIdRxComplainTables1727174323647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD \`doctorId\` int NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD \`orgId\` int NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD \`doctorId\` int NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD \`orgId\` int NOT NULL DEFAULT '1'`);
    }

}
