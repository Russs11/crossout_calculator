import { RareVehicleComponent } from "../rareVehicleComponent";
import * as CabinsImages from "./CabinsImages";
import CabinsCommonArray from "./common";
import WeaponsCommonArray from "../weapons/common";
import HardwareCommonArray from "../hardware/common";
import { CommonVehicleComponent } from "../commonVehicleComponent";

let [Sprinter, Huntsman, WWT1, Docker]: CommonVehicleComponent[] =
  CabinsCommonArray;
let Lupara: CommonVehicleComponent = WeaponsCommonArray[1];
let RS1Ruby: CommonVehicleComponent = HardwareCommonArray[3];
  
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
