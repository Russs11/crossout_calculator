import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getFromDbItemById, IdsArr } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices } from './prices.interface'



@Injectable()
export class PricesService {
  private intervalId: NodeJS.Timer
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices

  constructor() {
    this.resourcePrices = {
      scrapMetal: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      copper: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      wires: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      plastic: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      batteries: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      electronics: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      engravedCasings: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      }
    }
    this.cabinPrices = {
      Sprinter: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Huntsman: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      WWT1: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Docker: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      }
    }
  }

  getResourcePrices(): string {
    return JSON.stringify(this.resourcePrices)
  }
  getCabinPrices(): string {
    return JSON.stringify(this.cabinPrices)
  }

  startGettingPrices(): string {
    this.intervalId = setInterval(async () => {
      for (const item of IdsArr()) {
        const dbItem = await getFromDbItemById(item)
        switch (item) {
          //resources
          case '53':
            this.resourcePrices.scrapMetal.name = dbItem.name
            this.resourcePrices.scrapMetal.buyPrice = dbItem.buyPrice
            this.resourcePrices.scrapMetal.sellPrice = dbItem.sellPrice
            break;
          case '43':
            this.resourcePrices.copper.name = dbItem.name
            this.resourcePrices.copper.buyPrice = dbItem.buyPrice
            this.resourcePrices.copper.sellPrice = dbItem.sellPrice
            break;
          case '85':
            this.resourcePrices.wires.name = dbItem.name
            this.resourcePrices.wires.buyPrice = dbItem.buyPrice
            this.resourcePrices.wires.sellPrice = dbItem.sellPrice
            break;
          case '785':
            this.resourcePrices.plastic.name = dbItem.name
            this.resourcePrices.plastic.buyPrice = dbItem.buyPrice
            this.resourcePrices.plastic.sellPrice = dbItem.sellPrice
            break;
          case '783':
            this.resourcePrices.batteries.name = dbItem.name
            this.resourcePrices.batteries.buyPrice = dbItem.buyPrice
            this.resourcePrices.batteries.sellPrice = dbItem.sellPrice
            break;
          case '201':
            this.resourcePrices.electronics.name = dbItem.name
            this.resourcePrices.electronics.buyPrice = dbItem.buyPrice
            this.resourcePrices.electronics.sellPrice = dbItem.sellPrice
            break;
          case '919':
            this.resourcePrices.engravedCasings.name = dbItem.name
            this.resourcePrices.engravedCasings.buyPrice = dbItem.buyPrice
            this.resourcePrices.engravedCasings.sellPrice = dbItem.sellPrice
            break;
          //cabins
          case '960':
            this.cabinPrices.Sprinter.name = dbItem.name
            this.cabinPrices.Sprinter.buyPrice = dbItem.buyPrice
            this.cabinPrices.Sprinter.sellPrice = dbItem.sellPrice
            break;
          case '120':
            this.cabinPrices.Huntsman.name = dbItem.name
            this.cabinPrices.Huntsman.buyPrice = dbItem.buyPrice
            this.cabinPrices.Huntsman.sellPrice = dbItem.sellPrice
            break;
          case '88':
            this.cabinPrices.WWT1.name = dbItem.name
            this.cabinPrices.WWT1.buyPrice = dbItem.buyPrice
            this.cabinPrices.WWT1.sellPrice = dbItem.sellPrice
            break;
          case '96':
            this.cabinPrices.Docker.name = dbItem.name
            this.cabinPrices.Docker.buyPrice = dbItem.buyPrice
            this.cabinPrices.Docker.sellPrice = dbItem.sellPrice
            break;



          default:
            break;
        }
      }
    }, 5000)
    return 'start getting prices';
  }
  stopGettingPrices(): string {
    clearInterval(this.intervalId)
    return 'stop getting prices';
  }
}
