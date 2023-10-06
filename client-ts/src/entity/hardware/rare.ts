import { RareVehicleComponent } from "../rareVehicleComponent";
import * as HardwareImages from "./HardwareImages";
// import { Docker, Huntsman } from "../cabins/common";
// import { SmallWheel } from "../movement/common";
// // import { Avenger57mm } from '../weapons/common'
// import {
//   B1Aviator,
//   CarJack,
//   FuelBarrel,
//   R1Breese,
//   Radio,
//   RS1Ruby,
// } from "./common";
import WeaponsCommonArray from "../weapons/common";
import HardwareCommonArray from "./common";
import MovementCommonArray from "../movement/common";
import CabinsCommonArray from "../cabins/common";

let [P54MAccord, Lupara, Avenger57mm] = WeaponsCommonArray;
let [FuelBarrel, CarJack, Radio, RS1Ruby, B1Aviator, R1Breese] =
  HardwareCommonArray;
let [SmallWheel, SmallWheelST, MediumWheel, MediumWheelST] =
  MovementCommonArray;
let [Sprinter, Huntsman, WWT1, Docker] = CabinsCommonArray;

class FuelTank extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 307;
    this.name = "Топливный бак";
    this.type = "Особый модуль";
    this.ingredients = [FuelBarrel, Docker];
    this.img = HardwareImages.FuelTank;
  }
}
class RD1Listener extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 308;
    this.name = "РЛС-1 Слухач";
    this.type = "Радар";
    this.ingredients = [FuelBarrel, RS1Ruby];
    this.img = HardwareImages.RD1Listener;
  }
}
class TS1Horizon extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 309;
    this.name = "СП-1 Горизонт";
    this.type = "Прицел";
    this.ingredients = [Radio, SmallWheel];
    this.img = HardwareImages.TS1Horizon;
  }
}
class BigG extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 310;
    this.name = "Генка";
    this.type = "Генератор";
    this.scrapMetal = 700;
    this.ingredients = [B1Aviator, Avenger57mm];
    this.img = HardwareImages.BigG;
  }
}
class Blastoff extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 311;
    this.name = "Разгон";
    this.type = "Ускоритель";
    this.ingredients = [RS1Ruby, B1Aviator];
    this.img = HardwareImages.Blastoff;
  }
}
class R2Chill extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 312;
    this.name = "Р-2 Стужа";
    this.type = "Радиатор";
    this.ingredients = [R1Breese, Radio];
    this.img = HardwareImages.R2Chill;
  }
}
class CSTaymyr extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 313;
    this.name = "СО Таймыр";
    this.type = "Охладитель";
    this.ingredients = [Huntsman, R1Breese];
    this.img = HardwareImages.CSTaymyr;
  }
}
class AmmoPack extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 314;
    this.name = "Боезапас";
    this.type = "Боеприпасы";
    this.ingredients = [CarJack, Radio];
    this.img = HardwareImages.AmmoPack;
  }
}

const HardwareRareArray: RareVehicleComponent[] = [
  new FuelTank(),
  new RD1Listener(),
  new TS1Horizon(),
  new BigG(),
  new Blastoff(),
  new R2Chill(),
  new CSTaymyr(),
  new AmmoPack(),
];

export default HardwareRareArray;
