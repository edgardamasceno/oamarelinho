import { Module } from '@nestjs/common';
import { JobModule } from './job.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '../domain/entities/country.entity';
import { State } from '../domain/entities/state.entity';
import { City } from '../domain/entities/city.entity';
import { Company } from '../domain/entities/company.entity';
import { Job } from '../domain/entities/job.entity';
import '../infraestructure/database/typeorm/pollyfill';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: parseInt(process.env.MYSQL_DB_PORT) | 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Country, State, City, Company, Job],
      synchronize: false,
      logging: false,
    }),
    JobModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
