import { EpicVehicleComponent } from './epicVehicleComponent'

export class LegendaryVehicleComponent {
  name: string
  type: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  electronics: number
  batteries: number
  ingredients: EpicVehicleComponent[]

  constructor() {
    this.name = ''
    this.type = ''
    this.rarity = 'legendary'
    this.productionTime = 0
    this.benchCost = 75
    this.scrapMetal = 0
    this.copper = 0
    this.electronics = 0
    this.batteries = 0
    this.ingredients = []
  }

  getScrapMetal = (): number => { return this.scrapMetal }
  getCopper = (): number => { return this.copper }
  getElectronics = (): number => { return this.electronics }
  getBatteries = (): number => { return this.batteries }
  getBenchCost = (): number => { return this.benchCost }

  getAllScrapMetal = (): number => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getAllScrapMetal() }
    return scrapMetalCount
  }
  getAllCopper = (): number => {
    let copperCount = this.getCopper()
    for (let item of this.ingredients) { copperCount += item.getAllCopper() }
    return copperCount
  }
  getAllBatteries = (): number => {
    let batteriesCount = this.getBatteries()
    for (let item of this.ingredients) { batteriesCount += item.getBatteries() }
    return batteriesCount
  }
  getAllWires = (): number => {
    let wiresCount = 0
    for (let item of this.ingredients) { wiresCount += item.getAllWires() }
    return wiresCount
  }
  getAllPlastic = (): number => {
    let plasticCount = 0
    for (let item of this.ingredients) { plasticCount += item.getAllPlastic() }
    return plasticCount
  }
  getAllEngravedCasings = (): number => {
    let engravedCasingsCount = 0
    for (let item of this.ingredients) {
      engravedCasingsCount += item.getAllEngravedCasings()
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