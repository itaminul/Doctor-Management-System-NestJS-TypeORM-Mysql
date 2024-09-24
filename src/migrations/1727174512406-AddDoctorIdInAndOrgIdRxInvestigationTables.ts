import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDoctorIdInAndOrgIdRxInvestigationTables1727174512406
  implements MigrationInterface
{
  name = 'AddDoctorIdInAndOrgIdRxInvestigationTables1727174512406';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rxInvestigations\` ADD \`doctorId\` int NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxInvestigations\` ADD \`orgId\` int NOT NULL DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rxInvestigations\` ADD \`doctorId\` int NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxInvestigations\` ADD \`orgId\` int NOT NULL DEFAULT '1'`,
    );
  }
}
