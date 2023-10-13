import { SpecialVehicleComponent } from "../specialVehicleComponent";
// import { Trucker, Growl, Wyvern } from './rare'
import CabinsRareArray from "./rare";
// import { RD1Listener, BigG } from '../hardware/rare'
import HardwareRareArray from "../hardware/rare";
// import { AD12Falcon } from '../weapons/rare'
import WeaponsRareArray from "../weapons/rare";
import * as CabinsImages from "./CabinsImages";
import { RareVehicleComponent } from "../rareVehicleComponent";

let [Growl, Wyvern, Trucker]: RareVehicleComponent[] = CabinsRareArray;
let AD12Falcon: RareVehicleComponent = WeaponsRareArray[9];
let RD1Listener: RareVehicleComponent = HardwareRareArray[1];
let BigG: RareVehicleComponent = HardwareRareArray[3];
class Bat extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 108;
    this.name = "Нетопырь";
    this.type = "Легкая кабина";
    this.ingredients = [Growl, BigG];
    this.img = CabinsImages.Bat;
  }
}
class Pilgrim extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 109;
    this.name = "Пилигрим";
    this.type = "Средняя кабина";
    this.ingredients = [Wyvern, AD12Falcon];
    this.img = CabinsImages.Pilgrim;
  }
}
class Jawbreaker extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 110;
    this.name = "Зубодробитель";
    this.type = "Тяжелая кабина";
    this.ingredients = [Trucker, RD1Listener];
    this.img = CabinsImages.Jawbreaker;
  }
}
const CabinsSpecialArray: SpecialVehicleComponent[] = [
  new Bat(),
  new Pilgrim(),
  new Jawbreaker(),
];

export default CabinsSpecialArray;
