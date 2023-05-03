export class CommonVehicleComponent {
  name: string
  type: string
  rarity: string
  scrapMetal: number
  copper: number

  constructor() {
    this.name = ''
    this.type = ''
    this.rarity = 'common'
    this.scrapMetal = 0
    this.copper = 0
  }

  getScrapMetal = (): number => { return this.scrapMetal }
  getCopper = (): number => { return this.copper }
}