import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDoctorTables1727070193036 implements MigrationInterface {
  name = 'CreateDoctorTables1727070193036';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`doctor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NULL, \`degree_name\` varchar(255) NULL, \`email\` varchar(255) NULL, \`sl_no\` varchar(50) NULL, \`remarks\` varchar(255) NULL, \`date_of_birth\` date NULL, \`gender\` varchar(50) NULL, \`age\` varchar(50) NULL, \`active_status\` tinyint NOT NULL DEFAULT '1', \`address\` varchar(255) NOT NULL, \`mobile_no\` varchar(15) NULL, \`created_by\` int NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_by\` int NULL, \`updated_at\` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`doctor\``);
  }
}
