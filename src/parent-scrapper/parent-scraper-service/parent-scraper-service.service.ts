import { Injectable } from '@nestjs/common';
import { Result } from '../models/Result.model';
import { Offer } from '../models/offer.model';
import * as puppeteer from 'puppeteer';

@Injectable()
export class ParentScraperServiceService {
  public async getOffers(
    centerOfInterest: string,
  ): Promise<Result<Offer[], string>> {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(
        `https://www.freelancer.com/jobs/?keyword=${centerOfInterest}`,
      );
      await page.waitForSelector('#search-submit');
      const button = await page.$('#search-submit');
      await button.click();
      await page.waitForNetworkIdle();
      const result = await page.evaluate(() => {
        const items = Array.from(
          document.querySelectorAll('.JobSearchCard-primary'),
        );
        return items.map((item) => {
          const head = item.querySelector('.JobSearchCard-primary-heading');
          const linkAndDescription = head.querySelector('a');
          const time = head.querySelector('span');
          return {
            link: linkAndDescription.href.trim(),
            title: linkAndDescription.textContent.trim(),
            time: time.textContent.trim(),
          };
        });
      });
      browser.close();
      return { success: true, value: result };
    } catch (error) {
      return { success: false, value: 'an error occured' };
    }
  }
}
