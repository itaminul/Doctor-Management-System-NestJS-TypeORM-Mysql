import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePatientrxRxmedicineRxexaminationsTables1724652809585 implements MigrationInterface {
    name = 'CreatePatientrxRxmedicineRxexaminationsTables1724652809585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rxmedicine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`patientsrxid\` int NOT NULL, \`medicineId\` int NOT NULL, \`doses\` varchar(255) NOT NULL, \`isContinue\` int NOT NULL, \`duration\` varchar(255) NOT NULL, \`remarks\` varchar(255) NOT NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxexaminations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`patientsrxid\` int NOT NULL, \`examinationId\` int NOT NULL, \`activeStatus\` int NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patientsrx\` (\`id\` int NOT NULL AUTO_INCREMENT, \`RXDATE\` varchar(255) NOT NULL, \`followUp\` int NOT NULL, \`rxStatus\` int NOT NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` ADD CONSTRAINT \`FK_6dc04ea873bc150a6fb048aacc5\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` ADD CONSTRAINT \`FK_38c5c8f36e6e40bdbebd5657936\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` DROP FOREIGN KEY \`FK_38c5c8f36e6e40bdbebd5657936\``);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` DROP FOREIGN KEY \`FK_6dc04ea873bc150a6fb048aacc5\``);
        await queryRunner.query(`DROP TABLE \`patientsrx\``);
        await queryRunner.query(`DROP TABLE \`rxexaminations\``);
        await queryRunner.query(`DROP TABLE \`rxmedicine\``);
    }

}
