import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnRxMedicineTables1727600297965
  implements MigrationInterface
{
  name = 'AddColumnRxMedicineTables1727600297965';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`numberOfTimes\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`morning\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`lunch\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`evening\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`night\` int(10) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`numberOfTimes\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`morning\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`lunch\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`evening\` int(10) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`rxmedicine\` ADD \`night\` int(10) NOT NULL`,
    );
  }
}
