import {
  Controller,
  Get,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { ParentScraperServiceService } from '../parent-scraper-service/parent-scraper-service.service';

@Controller('parent-scraper-controller')
export class ParentScraperControllerController {
  constructor(
    private readonly parentScraperServiceService: ParentScraperServiceService,
  ) {}

  @Get(':centerOfInterest')
  public async getOffers(@Param() requestDto: { centerOfInterest: string }) {
    const result = await this.parentScraperServiceService.getOffers(
      requestDto.centerOfInterest,
    );
    if (result.success) {
      return result.value;
    } else {
      throw new InternalServerErrorException(result.value);
    }
  }
}
