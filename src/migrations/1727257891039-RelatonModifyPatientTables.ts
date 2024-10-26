import { MigrationInterface, QueryRunner } from "typeorm";

export class RelatonModifyPatientTables1727257891039 implements MigrationInterface {
    name = 'RelatonModifyPatientTables1727257891039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patientsrx\` ADD CONSTRAINT \`FK_4d93deb586207e18565f2409b12\` FOREIGN KEY (\`patientId\`) REFERENCES \`pat_patients_info\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patientsrx\` ADD CONSTRAINT \`fk_patient\` FOREIGN KEY (\`patientId\`) REFERENCES \`pat_patients_info\`(\`ID\`) ON DELETE CASCADE ON UPDATE RESTRICT`);
    }

}
