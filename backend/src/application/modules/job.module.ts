import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchJobsByTermUsecaseService } from 'src/application/domain/usecases/search-jobs-by-term.usecase.service';
import { FindAllJobsUsecaseService } from 'src/application/domain/usecases/find-all-jobs.usecase.service';
import { FindOneJobByIdUsecaseService } from 'src/application/domain/usecases/find-one-job.usecase.service';
import { SearchController } from 'src/application/infraestructure/restful/search.controller';
import { Job } from '../domain/entities/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [SearchController],
  providers: [
    SearchJobsByTermUsecaseService,
    FindAllJobsUsecaseService,
    FindOneJobByIdUsecaseService,
  ],
})
export class JobModule {}
