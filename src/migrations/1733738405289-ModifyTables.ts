import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyTables1733738405289 implements MigrationInterface {
    name = 'ModifyTables1733738405289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`ALTER TABLE \`medicine\` ADD CONSTRAINT \`FK_e55a27a5b6d50941ead6e1c84b9\` FOREIGN KEY (\`doctorId\`) REFERENCES \`doctor\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` ADD CONSTRAINT \`FK_1486ae194d4146bc3f98700faab\` FOREIGN KEY (\`examinationId\`) REFERENCES \`setExamination\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` ADD CONSTRAINT \`FK_07561854af8e1e8ddce4749d1e9\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` ADD CONSTRAINT \`FK_751ceb21d9354cf8b78179bb7d4\` FOREIGN KEY (\`investigationId\`) REFERENCES \`setInvestigations\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` ADD CONSTRAINT \`FK_ddbdc6d04ee540f1e466093dadd\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` ADD CONSTRAINT \`FK_48e35eeaf6ead2ea0ace9e14946\` FOREIGN KEY (\`adviceId\`) REFERENCES \`setAdvaice\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` DROP FOREIGN KEY \`FK_48e35eeaf6ead2ea0ace9e14946\``);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` DROP FOREIGN KEY \`FK_ddbdc6d04ee540f1e466093dadd\``);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` DROP FOREIGN KEY \`FK_751ceb21d9354cf8b78179bb7d4\``);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` DROP FOREIGN KEY \`FK_07561854af8e1e8ddce4749d1e9\``);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` DROP FOREIGN KEY \`FK_1486ae194d4146bc3f98700faab\``);
        await queryRunner.query(`ALTER TABLE \`medicine\` DROP FOREIGN KEY \`FK_e55a27a5b6d50941ead6e1c84b9\``);
    }

}
