import { Module } from '@nestjs/common';
import { ParentScraperControllerController } from './parent-scraper-controller/parent-scraper-controller.controller';
import { ParentScraperServiceService } from './parent-scraper-service/parent-scraper-service.service';

@Module({
  controllers: [ParentScraperControllerController],
  providers: [ParentScraperServiceService],
})
export class ParentScrapperModule {}
