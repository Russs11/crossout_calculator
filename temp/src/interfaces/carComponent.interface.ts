export interface ICarComponent{
  name: string
  rarity: string
  benchCost?: number
  scrapMetal: number
  copper: number
  wires?: number
  plastic?: number
  batteries?: number
  engravedCasings?: number
  ingredients?: ICarComponent[]

  getScrapMetal: () => number
  getAllScrapMetal?: () => number
}