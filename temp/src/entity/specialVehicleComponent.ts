import { RareVehicleComponent } from './rareVehicleComponent'

export class SpecialVehicleComponent {
  name: string
  type: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  engravedCasings: number
  ingredients: RareVehicleComponent[]

  constructor() {
    this.name = ''
    this.type = ''
    this.rarity = 'special'
    this.productionTime = 120
    this.benchCost = 6
    this.scrapMetal = 50
    this.copper = 100
    this.wires = 100
    this.plastic = 50
    this.engravedCasings = 0
    this.ingredients = []
  }

  getScrapMetal = (): number => {
    return this.scrapMetal
  }
  getCopper = (): number => { return this.copper }
  getWires = (): number => { return this.wires }
  getPlastic = (): number => { return this.plastic }
  getEngravedCasings = (): number => { return this.engravedCasings }
  getBenchCost = (): number => { return this.benchCost }
  getAllScrapMetal = (): number => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
  getAllCopper = (): number => {
    let copperCount = this.getCopper()
    for (let item of this.ingredients) {
      copperCount += item.getAllCopper()
    }
    return copperCount
  }
  getAllBenchCost = (): number => {
    let benchCost = this.getBenchCost()
    for (let item of this.ingredients) {
      benchCost += item.getBenchCost()
    }
    return benchCost
  }
}