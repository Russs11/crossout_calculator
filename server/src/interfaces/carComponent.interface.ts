export interface ICarComponent{
  name: string
  rarity: string
  benchCost?: number
  scrapMetal: number
  copper: number
  wires?: number
  plastic?: number
  batteries?: number
  ingredients?: ICarComponent[]

  getScrapMetal: () => number
  getAllScrapMetal?: () => number
}