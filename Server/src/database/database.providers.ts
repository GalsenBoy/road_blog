/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'my_blog',
        entities: [
          // __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: [
          /*...*/
        ],
        migrationsTableName: 'custom_migration_table',
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
