export class CommonVehicleComponent {
  id: number;
  name: string;
  type: string;
  rarity: string;
  buyPrice: number;
  sellPrice: number;
  scrapMetal: number;
  copper: number;
  img: string;

  constructor() {
    this.id = 0
    this.name = "";
    this.type = "";
    this.rarity = "common";
    this.buyPrice = 0;
    this.sellPrice = 0;
    this.scrapMetal = 0;
    this.copper = 0;
    this.img = ''
  }

  getScrapMetal = (): number => {
    return this.scrapMetal;
  };
  getCopper = (): number => {
    return this.copper;
  };
}