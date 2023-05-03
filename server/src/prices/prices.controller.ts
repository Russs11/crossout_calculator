import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { PricesService } from './prices.service';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get('start')
  startGettingPrices(): string {
    return this.pricesService.startGettingPrices();
  }
  @Get('stop')
  stopGettingPrices(): string {
    return this.pricesService.stopGettingPrices();
  }
  @Get('resourcePrices')
  getResourcePrices(): string {
    return this.pricesService.getResourcePrices();
  }
  @Get('cabinPrices')
  getCabinPrices(): string {
    return this.pricesService.getCabinPrices();
  }
}
