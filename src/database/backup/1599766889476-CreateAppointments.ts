import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1599766889476
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar', // vai ser um uuid
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropTable('appointments');
  }
}

/**
 * Linha do tempo
 *
 * 1a semana: criou tabela agendamentos
 * 2a semana: usuarios
 * 3a semana: (NOVO DEV) Edição agendamentos
 * 4a semana: compras
 *
 * migrations: Ajud quando tem mt devs trabalhando no msm projeto
 *
 */
