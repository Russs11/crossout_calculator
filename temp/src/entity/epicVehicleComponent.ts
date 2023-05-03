import { SpecialVehicleComponent } from './specialVehicleComponent'

export class EpicVehicleComponent {
  name: string
  type: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  batteries: number
  engravedCasings: number
  ingredients: SpecialVehicleComponent[]

  constructor() {
    this.name = ''
    this.type = ''
    this.rarity = 'epic'
    this.productionTime = 360
    this.benchCost = 15
    this.scrapMetal = 100
    this.copper = 150
    this.wires = 200
    this.plastic = 100
    this.batteries = 0
    this.engravedCasings = 0
    this.ingredients = []
  }

  getScrapMetal = (): number => {
    return this.scrapMetal
  }
  getCopper = (): number => { return this.copper }
  getWires = (): number => { return this.wires }
  getPlastic = (): number => { return this.plastic }
  getBatteries = (): number => { return this.batteries }
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
  getAllWires = (): number => {
    let wiresCount = this.getWires()
    for (let item of this.ingredients) {
      wiresCount += item.getWires()
    }
    return wiresCount
  }
  getAllPlastic = (): number => {
    let plasticCount = this.getPlastic()
    for (let item of this.ingredients) {
      plasticCount += item.getPlastic()
    }
    return plasticCount
  }
  getAllEngravedCasings = (): number => {
    let engravedCasingsCount = this.getEngravedCasings()
    for (let item of this.ingredients) {
      engravedCasingsCount += item.getEngravedCasings()
    }
    return engravedCasingsCount
  }
  getAllBenchCost = (): number => {
    let benchCost = this.getBenchCost()
    for (let item of this.ingredients) {
      benchCost += item.getAllBenchCost()
    }
    return benchCost
  }
}