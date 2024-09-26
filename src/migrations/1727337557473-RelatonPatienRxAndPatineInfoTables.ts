import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelatonPatienRxAndPatineInfoTables1727337557473
  implements MigrationInterface
{
  name = 'RelatonPatienRxAndPatineInfoTables1727337557473';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` ADD \`doctorsId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` ADD CONSTRAINT \`FK_db39d4fff8e9159ddfb11441553\` FOREIGN KEY (\`doctorsId\`) REFERENCES \`pat_patients_info\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` DROP COLUMN \`doctorsId\``,
    );
  }
}
