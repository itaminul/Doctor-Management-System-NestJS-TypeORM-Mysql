import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationWithPatientTables1727259370674
  implements MigrationInterface
{
  name = 'RelationWithPatientTables1727259370674';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`patientsrx\` ADD CONSTRAINT \`FK_4d93deb586207e18565f2409b12\` FOREIGN KEY (\`patientId\`) REFERENCES \`pat_patients_info\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE \`patientsrx\` 
          DROP FOREIGN KEY \`FK_4d93deb586207e18565f2409b12\`;
        `);
  }
}
