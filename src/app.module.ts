import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EurekaModule } from 'nestjs-eureka';
import { ParentScrapperModule } from './parent-scrapper/parent-scrapper.module';

@Module({
  imports: [
    EurekaModule.forRoot({
      eureka: {
        host: 'localhost',
        port: 8761,
        //registryFetchInterval: 1000,
        servicePath: '/eureka/apps/',
        maxRetries: 3,
      },
      service: {
        name: 'parent-scraper',
        port: 8080,
      },
    }),
    ParentScrapperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
