import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export class createAppointments1600104378335 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // lala
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid', // vai ser um uuid
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
