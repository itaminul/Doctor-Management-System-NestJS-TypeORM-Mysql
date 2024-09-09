import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSetInvestigationTables1725869446407 implements MigrationInterface {
    name = 'CreateSetInvestigationTables1725869446407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`setInvestigations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`slNo\` int NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`investigationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxInvestigations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`investigationId\` int NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxAdvice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`adviceId\` int NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxComplains\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` timestamp NULL, \`patientsrxid\` int NULL, \`complainId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`setInvestigations\` ADD CONSTRAINT \`FK_d73f15bc7ef6c8f30817c00ec84\` FOREIGN KEY (\`investigationId\`) REFERENCES \`rxInvestigations\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` ADD CONSTRAINT \`FK_07561854af8e1e8ddce4749d1e9\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` ADD CONSTRAINT \`FK_ddbdc6d04ee540f1e466093dadd\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD CONSTRAINT \`FK_19a7078a040a645e44df605f4c8\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD CONSTRAINT \`FK_d3e025987cbca1ff5de2c38dde8\` FOREIGN KEY (\`complainId\`) REFERENCES \`complains\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxComplains\` DROP FOREIGN KEY \`FK_d3e025987cbca1ff5de2c38dde8\``);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` DROP FOREIGN KEY \`FK_19a7078a040a645e44df605f4c8\``);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` DROP FOREIGN KEY \`FK_ddbdc6d04ee540f1e466093dadd\``);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` DROP FOREIGN KEY \`FK_07561854af8e1e8ddce4749d1e9\``);
        await queryRunner.query(`ALTER TABLE \`setInvestigations\` DROP FOREIGN KEY \`FK_d73f15bc7ef6c8f30817c00ec84\``);
        await queryRunner.query(`DROP TABLE \`rxComplains\``);
        await queryRunner.query(`DROP TABLE \`rxAdvice\``);
        await queryRunner.query(`DROP TABLE \`rxInvestigations\``);
        await queryRunner.query(`DROP TABLE \`setInvestigations\``);
    }

}
