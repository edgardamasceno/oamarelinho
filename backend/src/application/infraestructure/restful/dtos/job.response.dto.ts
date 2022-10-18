export class JobResponseDTO {
  id: number;
  title: string;
  description: string;
  companyName: string;
  cityName: string;
  stateName: string;
  updatedAt: Date;
  createdAt: Date;
  score?: number;
}
