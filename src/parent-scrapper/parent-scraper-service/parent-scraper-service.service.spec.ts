import { Test, TestingModule } from '@nestjs/testing';
import { ParentScraperServiceService } from './parent-scraper-service.service';

describe('ParentScraperServiceService', () => {
  let service: ParentScraperServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentScraperServiceService],
    }).compile();

    service = module.get<ParentScraperServiceService>(ParentScraperServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
