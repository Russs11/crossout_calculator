import { CommonVehicleComponent } from './commonVehicleComponent'

export class RareVehicleComponent {
  name: string
  type: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  ingredients: CommonVehicleComponent[]
  img: string

  constructor() {
    this.name = ''
    this.type = ''
    this.rarity = 'rare'
    this.productionTime = 15
    this.benchCost = 3
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = []
    this.img = ''
  }

  getScrapMetal = (): number => { return this.scrapMetal }
  getCopper = (): number => { return this.copper }
  getBenchCost = (): number => { return this.benchCost }
  getAllScrapMetal = (): number => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
  getAllCopper = (): number => {
    let copperCount = this.getCopper()
    for (let item of this.ingredients) {
      copperCount += item.getCopper()
    }
    return copperCount
  }
}