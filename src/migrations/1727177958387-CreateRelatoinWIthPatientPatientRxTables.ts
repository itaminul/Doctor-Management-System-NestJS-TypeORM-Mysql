import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPatientRxRelationship1625085600000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Step 1: Add patientId column to patientsrx
    await queryRunner.query(`
            ALTER TABLE patientsrx 
            ADD COLUMN patientId INT
        `);

    // Step 2: Add foreign key constraint to patientsrx
    await queryRunner.query(`
            ALTER TABLE patientsrx 
            ADD CONSTRAINT fk_patient
            FOREIGN KEY (patientId) 
            REFERENCES pat_patients_info(id) 
            ON DELETE CASCADE
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove the foreign key constraint if the migration is reverted
    await queryRunner.query(`
            ALTER TABLE patientsrx 
            DROP FOREIGN KEY fk_patient
        `);

    // Remove the patientId column
    await queryRunner.query(`
            ALTER TABLE patientsrx 
            DROP COLUMN patientId
        `);
  }
}
