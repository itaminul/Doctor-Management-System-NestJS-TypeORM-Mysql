import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationWithDoctorAndMedicineTables1727074105765
  implements MigrationInterface
{
  name = 'RelationWithDoctorAndMedicineTables1727074105765';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Step 2: Add the foreign key constraint
    await queryRunner.query(
      `ALTER TABLE \`pat_patients_info\` 
       ADD CONSTRAINT \`FK_patients_doctor\` 
       FOREIGN KEY (\`doctorId\`) 
       REFERENCES \`doctor\`(\`id\`) 
       ON DELETE CASCADE 
       ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove the foreign key constraint and the doctorId column
    await queryRunner.query(
      `ALTER TABLE \`pat_patients_info\` DROP FOREIGN KEY \`FK_patients_doctor\``,
    );
  }
}
