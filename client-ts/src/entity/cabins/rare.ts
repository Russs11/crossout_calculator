import { RareVehicleComponent } from "../rareVehicleComponent";
import * as CabinsImages from "./CabinsImages";
// import { RS1Ruby } from "../hardware/common";
// import { Lupara } from '../weapons/common'
import CabinsCommonArray from "./common";
import WeaponsCommonArray from "../weapons/common";
import HardwareCommonArray from "../hardware/common";

let [P54MAccord, Lupara, Avenger57mm] = WeaponsCommonArray;
let [Sprinter, Huntsman, WWT1, Docker] = CabinsCommonArray;
let [FuelBarrel, CarJack, Radio, RS1Ruby, B1Aviator, R1Breese] =
  HardwareCommonArray;
class Growl extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 105;
    this.name = "Рык";
    this.type = "Легкая кабина";
    this.scrapMetal = 700;
    this.ingredients = [Sprinter, Lupara];
    this.img = CabinsImages.Growl;
  }
}
class Wyvern extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 106;
    this.name = "Виверна";
    this.type = "Средняя кабина";
    this.scrapMetal = 700;
    this.ingredients = [Huntsman, RS1Ruby];
    this.img = CabinsImages.Wyvern;
  }
}
class Trucker extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 107;
    this.name = "Дальнобой";
    this.type = "Тяжелая кабина";
    this.scrapMetal = 700;
    this.ingredients = [Sprinter, Docker];
    this.img = CabinsImages.Trucker;
  }
}

const CabinsRareArray: RareVehicleComponent[] = [
  new Growl(),
  new Wyvern(),
  new Trucker(),
];

export default CabinsRareArray;
