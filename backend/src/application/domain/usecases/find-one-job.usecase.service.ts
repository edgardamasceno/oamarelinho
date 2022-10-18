import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';
import { Company } from '../entities/company.entity';
import { Job } from '../entities/job.entity';
import { State } from '../entities/state.entity';

@Injectable()
export class FindOneJobByIdUsecaseService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async execute(id: number): Promise<Job> {
    return await this.jobRepository
      .createQueryBuilder('job')
      .select()
      .leftJoinAndMapOne('job.city', City, 'city', 'job.city_id = city.id')
      .leftJoinAndMapOne(
        'city.state',
        State,
        'state',
        'city.state_id = state.id',
      )
      .leftJoinAndMapOne(
        'job.company',
        Company,
        'company',
        'job.company_id = company.id',
      )
      .andWhere('job.id = :id', { id })
      .getOne();
  }
}
