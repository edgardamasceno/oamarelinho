import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { FindAllJobsUsecaseService } from 'src/application/domain/usecases/find-all-jobs.usecase.service';
import { FindOneJobByIdUsecaseService } from 'src/application/domain/usecases/find-one-job.usecase.service';
import { SearchJobsByTermUsecaseService } from 'src/application/domain/usecases/search-jobs-by-term.usecase.service';
import { SearchAdapter } from '../adapters/search.adapter';
import { JobResponseDTO } from './dtos/job.response.dto';

@Controller('/jobs')
export class SearchController {
  constructor(
    private readonly searchJobByTerm: SearchJobsByTermUsecaseService,
    private readonly findAllJobs: FindAllJobsUsecaseService,
    private readonly findOneJobById: FindOneJobByIdUsecaseService,
  ) {}

  @Get()
  async findAll(): Promise<JobResponseDTO | JobResponseDTO[]> {
    const result = SearchAdapter.toDTO(await this.findAllJobs.execute());
    if (!result) {
      throw new NotFoundException('Job not found');
    }
    return result;
  }

  @Get('/search')
  async searchByTerm(
    @Query() query: any,
  ): Promise<JobResponseDTO | JobResponseDTO[]> {
    const result = SearchAdapter.toDTO(
      await this.searchJobByTerm.execute(query.term),
    );
    if (!result) {
      throw new NotFoundException('Job not found');
    }
    return result;
  }

  @Get(':id')
  async findOneById(
    @Param('id') id: number,
  ): Promise<JobResponseDTO | JobResponseDTO[]> {
    const result = SearchAdapter.toDTO(await this.findOneJobById.execute(id));
    if (!result) {
      throw new NotFoundException('Job not found');
    }
    return result;
  }
}
