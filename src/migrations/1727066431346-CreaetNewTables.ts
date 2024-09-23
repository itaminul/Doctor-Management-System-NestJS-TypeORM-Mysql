import { MigrationInterface, QueryRunner } from "typeorm";

export class CreaetNewTables1727066431346 implements MigrationInterface {
    name = 'CreaetNewTables1727066431346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`medicine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`medicineName\` varchar(255) NOT NULL, \`slNo\` int NULL, \`description\` varchar(255) NULL, \`medicineGenericeId\` int NULL, \`manufacturerId\` int NULL, \`categoryId\` int NULL, \`strength\` varchar(255) NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` timestamp NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxmedicine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doses\` varchar(255) NULL, \`isContinue\` int NULL, \`duration\` varchar(255) NULL, \`remarks\` varchar(255) NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`medicineId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`setExamination\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slNo\` int NULL, \`description\` varchar(255) NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` timestamp NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxexaminations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`examinationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`setInvestigations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`slNo\` int NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxInvestigations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`investigationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`setAdvaice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`slNo\` int NOT NULL, \`remarks\` varchar(255) NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxAdvice\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`adviceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`complains\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slNo\` int NOT NULL, \`description\` varchar(255) NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`doctorId\` int NOT NULL DEFAULT '1', \`orgId\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rxComplains\` (\`id\` int NOT NULL AUTO_INCREMENT, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` timestamp NULL, \`patientsrxid\` int NULL, \`complainId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patientsrx\` (\`id\` int NOT NULL AUTO_INCREMENT, \`RXDATE\` varchar(255) NOT NULL, \`followUp\` int NULL, \`rxStatus\` int NULL, \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` ADD CONSTRAINT \`FK_6dc04ea873bc150a6fb048aacc5\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` ADD CONSTRAINT \`FK_b541eb813f87ed7527073bd05f1\` FOREIGN KEY (\`medicineId\`) REFERENCES \`medicine\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` ADD CONSTRAINT \`FK_38c5c8f36e6e40bdbebd5657936\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` ADD CONSTRAINT \`FK_1486ae194d4146bc3f98700faab\` FOREIGN KEY (\`examinationId\`) REFERENCES \`setExamination\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` ADD CONSTRAINT \`FK_07561854af8e1e8ddce4749d1e9\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` ADD CONSTRAINT \`FK_751ceb21d9354cf8b78179bb7d4\` FOREIGN KEY (\`investigationId\`) REFERENCES \`setInvestigations\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` ADD CONSTRAINT \`FK_ddbdc6d04ee540f1e466093dadd\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` ADD CONSTRAINT \`FK_48e35eeaf6ead2ea0ace9e14946\` FOREIGN KEY (\`adviceId\`) REFERENCES \`setAdvaice\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD CONSTRAINT \`FK_19a7078a040a645e44df605f4c8\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` ADD CONSTRAINT \`FK_d3e025987cbca1ff5de2c38dde8\` FOREIGN KEY (\`complainId\`) REFERENCES \`complains\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rxComplains\` DROP FOREIGN KEY \`FK_d3e025987cbca1ff5de2c38dde8\``);
        await queryRunner.query(`ALTER TABLE \`rxComplains\` DROP FOREIGN KEY \`FK_19a7078a040a645e44df605f4c8\``);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` DROP FOREIGN KEY \`FK_48e35eeaf6ead2ea0ace9e14946\``);
        await queryRunner.query(`ALTER TABLE \`rxAdvice\` DROP FOREIGN KEY \`FK_ddbdc6d04ee540f1e466093dadd\``);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` DROP FOREIGN KEY \`FK_751ceb21d9354cf8b78179bb7d4\``);
        await queryRunner.query(`ALTER TABLE \`rxInvestigations\` DROP FOREIGN KEY \`FK_07561854af8e1e8ddce4749d1e9\``);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` DROP FOREIGN KEY \`FK_1486ae194d4146bc3f98700faab\``);
        await queryRunner.query(`ALTER TABLE \`rxexaminations\` DROP FOREIGN KEY \`FK_38c5c8f36e6e40bdbebd5657936\``);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` DROP FOREIGN KEY \`FK_b541eb813f87ed7527073bd05f1\``);
        await queryRunner.query(`ALTER TABLE \`rxmedicine\` DROP FOREIGN KEY \`FK_6dc04ea873bc150a6fb048aacc5\``);
        await queryRunner.query(`DROP TABLE \`patientsrx\``);
        await queryRunner.query(`DROP TABLE \`rxComplains\``);
        await queryRunner.query(`DROP TABLE \`complains\``);
        await queryRunner.query(`DROP TABLE \`rxAdvice\``);
        await queryRunner.query(`DROP TABLE \`setAdvaice\``);
        await queryRunner.query(`DROP TABLE \`rxInvestigations\``);
        await queryRunner.query(`DROP TABLE \`setInvestigations\``);
        await queryRunner.query(`DROP TABLE \`rxexaminations\``);
        await queryRunner.query(`DROP TABLE \`setExamination\``);
        await queryRunner.query(`DROP TABLE \`rxmedicine\``);
        await queryRunner.query(`DROP TABLE \`medicine\``);
    }

}
