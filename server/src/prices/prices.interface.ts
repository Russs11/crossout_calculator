interface IPrices {
  name: string
  buyPrice: number
  sellPrice: number
}
export interface IResourcePrices {
  scrapMetal: IPrices
  copper: IPrices
  wires: IPrices
  plastic: IPrices
  batteries: IPrices
  electronics: IPrices
  engravedCasings: IPrices
}
export interface ICabinPrices {
  Sprinter: IPrices
  Huntsman: IPrices
  WWT1: IPrices
  Docker: IPrices
}