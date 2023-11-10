import { Test, TestingModule } from '@nestjs/testing';
import { ParentScraperControllerController } from './parent-scraper-controller.controller';

describe('ParentScraperControllerController', () => {
  let controller: ParentScraperControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentScraperControllerController],
    }).compile();

    controller = module.get<ParentScraperControllerController>(ParentScraperControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
