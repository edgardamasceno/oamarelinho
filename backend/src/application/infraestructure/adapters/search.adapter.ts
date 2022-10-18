import { Job } from 'src/application/domain/entities/job.entity';
import { JobResponseDTO } from '../restful/dtos/job.response.dto';

export class SearchAdapter {
  static toDTO(job: Job | Array<Job>): JobResponseDTO | Array<JobResponseDTO> {
    var result = null;
    if (job instanceof Job) {
      result = {
        id: job.id,
        title: job.title,
        description: job.description,
        companyName: job.company.name,
        cityName: job.city.name,
        stateName: job.city.state.name,
        updatedAt: job.updatedAt,
        createdAt: job.createdAt,
        score: job.score,
      };
    } else if (job) {
      result = job.map((job) => {
        return this.toDTO(job);
      });
    }
    return result;
  }
}
