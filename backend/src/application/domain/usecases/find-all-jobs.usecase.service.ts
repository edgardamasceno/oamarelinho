import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { Company } from '../entities/company.entity';
import { Job } from '../entities/job.entity';
import { State } from '../entities/state.entity';

@Injectable()
export class FindAllJobsUsecaseService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async execute(): Promise<Array<Job>> {
    return await this.jobRepository.find({ order: { updatedAt: 'DESC' } });
  }
}
