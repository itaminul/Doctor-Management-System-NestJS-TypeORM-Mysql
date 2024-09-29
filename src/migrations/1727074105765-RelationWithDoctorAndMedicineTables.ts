import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationWithDoctorAndMedicineTables1727074105765
  implements MigrationInterface
{
  name = 'RelationWithDoctorAndMedicineTables1727074105765';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`medicine\` DROP COLUMN \`activeStatus\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`medicine\` CHANGE \`doctorId\` \`doctorId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`medicine\` ADD CONSTRAINT \`FK_e55a27a5b6d50941ead6e1c84b9\` FOREIGN KEY (\`doctorId\`) REFERENCES \`doctor\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`medicine\` DROP FOREIGN KEY \`FK_e55a27a5b6d50941ead6e1c84b9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`medicine\` CHANGE \`doctorId\` \`doctorId\` int NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`medicine\` ADD \`activeStatus\` int NOT NULL DEFAULT '1'`,
    );
  }
}
