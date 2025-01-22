import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModifyOnExaminatinTables1737546120887
  implements MigrationInterface
{
  name = 'ModifyOnExaminatinTables1737546120887';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`rxOnExaminations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doctorId\` int NOT NULL DEFAULT '1', \`orgId\` int NOT NULL DEFAULT '1', \`activeStatus\` int NOT NULL DEFAULT '1', \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` datetime NULL, \`patientsrxid\` int NULL, \`onExaminationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` ADD CONSTRAINT \`FK_c9d72591f72d15e514977b73c95\` FOREIGN KEY (\`patientsrxid\`) REFERENCES \`patientsrx\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` ADD CONSTRAINT \`FK_a56c8e55dd14d0d489603709143\` FOREIGN KEY (\`onExaminationId\`) REFERENCES \`SetOnExamination\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
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
      `ALTER TABLE \`rxOnExaminations\` DROP FOREIGN KEY \`FK_a56c8e55dd14d0d489603709143\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxOnExaminations\` DROP FOREIGN KEY \`FK_c9d72591f72d15e514977b73c95\``,
    );
    await queryRunner.query(`DROP TABLE \`rxOnExaminations\``);
    await queryRunner.query(
      `ALTER TABLE \`rx_package\` ADD CONSTRAINT \`FK_9bce17212156f22fb5489a1cdd9\` FOREIGN KEY (\`onRxPackageId\`) REFERENCES \`setpackage\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }
}
