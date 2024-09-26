import { MigrationInterface, QueryRunner } from 'typeorm';

export class Relaton2PatienRxAndDoctorTables1727343377655
  implements MigrationInterface
{
  name = 'Relaton2PatienRxAndDoctorTables1727343377655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`pat_patients_info\` ADD \`doctorsId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`pat_patients_info\` ADD CONSTRAINT \`FK_db39d4fff8e9159ddfb11441553\` FOREIGN KEY (\`doctorsId\`) REFERENCES \`doctor\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`pat_patients_info\` DROP COLUMN \`doctorsId\``,
    );
  }
}
