import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlansPackagesTables1737370329765
  implements MigrationInterface
{
  name = 'CreatePlansPackagesTables1737370329765';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`SetOnExamination\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`slNo\` int NOT NULL, \`remarks\` varchar(255) NOT NULL, \`activeStatus\` int NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rxOnExaminations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctorId\` int NOT NULL DEFAULT '1', \`orgId\` int NOT NULL DEFAULT '1', \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`onExaminationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`setPlain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`slNo\` int NOT NULL, \`remarks\` varchar(255) NOT NULL, \`activeStatus\` int NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rx_plain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctorId\` int NOT NULL DEFAULT '1', \`orgId\` int NOT NULL DEFAULT '1', \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`plainId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`setPackage\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`slNo\` int NOT NULL, \`remarks\` varchar(255) NOT NULL, \`activeStatus\` int NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`rx_package\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctorId\` int NOT NULL DEFAULT '1', \`orgId\` int NOT NULL DEFAULT '1', \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`onRxPackageId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` ADD CONSTRAINT \`FK_c9d72591f72d15e514977b73c95\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` ADD CONSTRAINT \`FK_a56c8e55dd14d0d489603709143\` FOREIGN KEY (\`onExaminationId\`) REFERENCES \`SetOnExamination\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_plain\` ADD CONSTRAINT \`FK_5590977e270756241843bfa517f\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_plain\` ADD CONSTRAINT \`FK_c36f58096eb535fae0fc7b35207\` FOREIGN KEY (\`plainId\`) REFERENCES \`setPlain\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_package\` ADD CONSTRAINT \`FK_f24159d71e909c6bbc416dfa49c\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_package\` ADD CONSTRAINT \`FK_9bce17212156f22fb5489a1cdd9\` FOREIGN KEY (\`onRxPackageId\`) REFERENCES \`setPackage\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rx_package\` DROP FOREIGN KEY \`FK_9bce17212156f22fb5489a1cdd9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_package\` DROP FOREIGN KEY \`FK_f24159d71e909c6bbc416dfa49c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_plain\` DROP FOREIGN KEY \`FK_c36f58096eb535fae0fc7b35207\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rx_plain\` DROP FOREIGN KEY \`FK_5590977e270756241843bfa517f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` DROP FOREIGN KEY \`FK_a56c8e55dd14d0d489603709143\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` DROP FOREIGN KEY \`FK_c9d72591f72d15e514977b73c95\``,
    );
    await queryRunner.query(`DROP TABLE \`rx_package\``);
    await queryRunner.query(`DROP TABLE \`setPackage\``);
    await queryRunner.query(`DROP TABLE \`rx_plain\``);
    await queryRunner.query(`DROP TABLE \`setPlain\``);
    await queryRunner.query(`DROP TABLE \`rxOnExaminations\``);
    await queryRunner.query(`DROP TABLE \`SetOnExamination\``);
  }
}
