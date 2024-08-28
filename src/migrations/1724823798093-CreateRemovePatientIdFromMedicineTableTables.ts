import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRemovePatientIdFromMedicineTableTables1724823798093 implements MigrationInterface {
    name = 'CreateRemovePatientIdFromMedicineTableTables1724823798093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rxmedicine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`patientsrxid\` int NOT NULL, \`medicineId\` int NULL, \`doses\` varchar(255) NULL, \`isContinue\` int NULL, \`duration\` varchar(255) NULL, \`remarks\` varchar(255) NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` ADD CONSTRAINT \`FK_6dc04ea873bc150a6fb048aacc5\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` DROP FOREIGN KEY \`FK_6dc04ea873bc150a6fb048aacc5\``);
        await queryRunner.query(`DROP TABLE \`rxmedicine\``);
    }

}
