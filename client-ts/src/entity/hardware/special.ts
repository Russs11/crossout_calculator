import { SpecialVehicleComponent } from "../specialVehicleComponent";
import * as HardwareImages from "./HardwareImages";
import CabinsRareArray from "../cabins/rare";
import HardwareRareArray from "./rare";
import MovementRareArray from "../movement/rare";
import WeaponsRareArray from "../weapons/rare";
import { RareVehicleComponent } from "../rareVehicleComponent";
import { CommonVehicleComponent } from "../commonVehicleComponent";

let Trucker: RareVehicleComponent = CabinsRareArray[2];
let LittleBoy6LB: RareVehicleComponent = WeaponsRareArray[5];
let AD12Falcon: RareVehicleComponent = WeaponsRareArray[9];
let DTCobra: RareVehicleComponent = WeaponsRareArray[10];

let [
  StuddedWheel,
  StuddedWheelST,
  ChainedWheel,
  ChainedWheelST,
  BalloonTyre,
  BalloonTyreST,
  RacingWheel,
  RacingWheelST,
  LandingGear,
  LandingGearST,
  LargeWheel,
  LargeWheelST,
]: RareVehicleComponent[] = MovementRareArray;

let [
  FuelTank,
  RD1Listener,
  TS1Horizon,
  BigG,
  Blastoff,
  R2Chill,
  CSTaymyr,
  AmmoPack,
]: RareVehicleComponent[] = HardwareRareArray;

class Chameleon extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 315;
    this.name = "Хамелеон";
    this.type = "Невидимость";
    this.ingredients = [LandingGear, CSTaymyr];
    this.img = HardwareImages.Chameleon;
  }
}
class KA1Discharger extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 316;
    this.name = "КА-1 Разрядник";
    this.type = "Ускоритель перезарядки";
    this.scrapMetal = 200;
    this.copper = 200;
    this.plastic = 30;
    this.ingredients = [CSTaymyr, Trucker];
    this.img = HardwareImages.KA1Discharger;
  }
}
class OculusVI extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 317;
    this.name = "Окулус VI";
    this.type = "Радар";
    this.ingredients = [RD1Listener, TS1Horizon];
    this.img = HardwareImages.OculusVI;
  }
}
class Maxwell extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 318;
    this.name = "Максвелл";
    this.type = "Радар";
    this.ingredients = [LandingGearST, TS1Horizon];
    this.img = HardwareImages.Maxwell;
  }
}
class PU1Charge extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 319;
    this.name = "ЭУ-1 Заряд";
    this.type = "Генератор";
    this.ingredients = [DTCobra, TS1Horizon];
    this.img = HardwareImages.PU1Charge;
  }
}
class Ampere extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 320;
    this.name = "Ампер";
    this.type = "Генератор";
    this.ingredients = [RacingWheelST, R2Chill];
    this.img = HardwareImages.Ampere;
  }
}
class Hardcore extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 321;
    this.name = "Жесткач";
    this.type = "Двигатель";
    this.ingredients = [Blastoff, CSTaymyr];
    this.img = HardwareImages.Hardcore;
  }
}
class Razorback extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 322;
    this.name = "Работяга";
    this.type = "Двигатель";
    this.ingredients = [Trucker, LittleBoy6LB];
    this.img = HardwareImages.Razorback;
  }
}
class DunHorse extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 323;
    this.name = "Саврас";
    this.type = "Двигатель";
    this.ingredients = [RacingWheel, R2Chill];
    this.img = HardwareImages.DunHorse;
  }
}
class Genesis extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 324;
    this.name = "Генезис";
    this.type = "Боеприпасы";
    this.ingredients = [AD12Falcon, AmmoPack];
    this.img = HardwareImages.Genesis;
  }
}

const HardwareSpecialArray: SpecialVehicleComponent[] = [
  new Chameleon(),
  new KA1Discharger(),
  new OculusVI(),
  new Maxwell(),
  new PU1Charge(),
  new Ampere(),
  new Hardcore(),
  new Razorback(),
  new DunHorse(),
  new Genesis(),
];
export default HardwareSpecialArray;
