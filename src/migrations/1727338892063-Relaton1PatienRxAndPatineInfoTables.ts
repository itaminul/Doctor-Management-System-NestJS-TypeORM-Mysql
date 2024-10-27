import { MigrationInterface, QueryRunner } from 'typeorm';

export class Relaton1PatienRxAndPatineInfoTables1727338892063
  implements MigrationInterface
{
  name = 'Relaton1PatienRxAndPatineInfoTables1727338892063';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` ADD \`doctorId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` ADD CONSTRAINT \`FK_db39d4fff8e9159ddfb11441553\` FOREIGN KEY (\`doctorId\`) REFERENCES \`pat_patients_info\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` DROP COLUMN \`doctorId\``,
    );
  }
}
