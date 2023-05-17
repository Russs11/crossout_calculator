export class CommonVehicleComponent {
  id: number 
  name: string
  type: string
  rarity: string
  scrapMetal: number
  copper: number

  constructor() {
    this.id = 0
    this.name = ''
    this.type = ''
    this.rarity = 'common'
    this.scrapMetal = 0
    this.copper = 0
  }

  getScrapMetal = (): number => { return this.scrapMetal }
  getCopper = (): number => { return this.copper }
}