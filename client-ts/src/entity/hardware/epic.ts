import { EpicVehicleComponent } from "../epicVehicleComponent";
import * as HardwareImages from "./HardwareImages";
import { SpecialVehicleComponent } from "../specialVehicleComponent";
import CabinsSpecialArray from "../cabins/special";
import WeaponSpecialArray from "../weapons/special";
import HardwareSpecialArray from "./special";
import MovementSpecialArray from "../movement/special";

const Bat: SpecialVehicleComponent = CabinsSpecialArray[0];

let [
  LunarIV,
  LunarIVST,
  Camber,
  CamberST,
  Shiv,
  ShivST,
  APCWheel,
  APCWheelST,
  TwinWheel,
  TwinWheelST,
]: SpecialVehicleComponent[] = MovementSpecialArray;

let [
  M37Piercer,
  Sinus0,
  Goblin,
  Junkbow,
  Mace,
  AC50Storm,
  ZS33Hulk,
  Prosecutor76mm,
  Synthesis,
  Boom,
  Tempura,
  Buzzsaw,
  AD13Hawk,
  Sidekick,
  T3Python,
]: SpecialVehicleComponent[] = WeaponSpecialArray;

let [
  Chameleon,
  KA1Discharger,
  OculusVI,
  Maxwell,
  PU1Charge,
  Ampere,
  Hardcore,
  Razorback,
  DunHorse,
  Genesis,
]: SpecialVehicleComponent[] = HardwareSpecialArray;

class Tormentor extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 325;
    this.name = "Мучитель";
    this.type = "";
    this.ingredients = [Bat, Junkbow, AD13Hawk];
    this.img = HardwareImages.Tormentor;
  }
}
class ChameleonMk2 extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 326;
    this.name = "Хамелеон Mk2";
    this.type = "";
    this.ingredients = [Maxwell, AC50Storm, Chameleon];
    this.img = HardwareImages.ChameleonMk2;
  }
}
class KA2Flywheel extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 327;
    this.name = "КА-2 Маховик";
    this.type = "";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [KA1Discharger, Razorback, OculusVI];
    this.img = HardwareImages.KA2Flywheel;
  }
}
class Doppler extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 328;
    this.name = "Доплер";
    this.type = "";
    this.ingredients = [Maxwell, Chameleon];
    this.img = HardwareImages.Doppler;
  }
}
class RD2Keen extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 329;
    this.name = "РЛС-2 Чуткий";
    this.type = "";
    this.ingredients = [OculusVI, TwinWheel, PU1Charge];
    this.img = HardwareImages.RD2Keen;
  }
}
class Neutrino extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 330;
    this.name = "Нейтрино";
    this.type = "";
    this.ingredients = [LunarIV, Genesis, TwinWheelST];
    this.img = HardwareImages.Neutrino;
  }
}
class Gasgen extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 331;
    this.name = "Газген";
    this.type = "";
    this.ingredients = [Buzzsaw, Goblin, Boom];
    this.img = HardwareImages.Gasgen;
  }
}
class Oppressor extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 332;
    this.name = "Гонитель";
    this.type = "";
    this.ingredients = [Bat, ShivST, Hardcore];
    this.img = HardwareImages.Oppressor;
  }
}
class HotRed extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 333;
    this.name = "Четкий";
    this.type = "";
    this.ingredients = [Hardcore, Goblin, Mace];
    this.img = HardwareImages.HotRed;
  }
}
class Colossus extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 334;
    this.name = "Исполин";
    this.type = "";
    this.ingredients = [Razorback, TwinWheel, ZS33Hulk];
    this.img = HardwareImages.Colossus;
  }
}
class Cheetah extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 335;
    this.name = "Гепард";
    this.type = "";
    this.ingredients = [DunHorse, Chameleon, AC50Storm];
    this.img = HardwareImages.Cheetah;
  }
}
class Hermes extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 336;
    this.name = "Гермес";
    this.type = "";
    this.ingredients = [Hardcore, Boom, Buzzsaw];
    this.img = HardwareImages.Hermes;
  }
}
class RNSeal extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 337;
    this.name = "РС Нерпа";
    this.type = "";
    this.ingredients = [Maxwell, Ampere, DunHorse];
    this.img = HardwareImages.RNSeal;
  }
}
class Shiver extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 338;
    this.name = "Озноб";
    this.type = "";
    this.ingredients = [Buzzsaw, Mace, Hardcore];
    this.img = HardwareImages.Shiver;
  }
}
class ExpandedAmmoPack extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 339;
    this.name = "Боезапас увеличенный";
    this.type = "";
    this.ingredients = [OculusVI, PU1Charge, Prosecutor76mm];
    this.img = HardwareImages.ExpandedAmmoPack;
  }
}

const HardwareEpicArray: EpicVehicleComponent[] = [
  new Tormentor(),
  new ChameleonMk2(),
  new KA2Flywheel(),
  new Doppler(),
  new RD2Keen(),
  new Neutrino(),
  new Gasgen(),
  new Oppressor(),
  new HotRed(),
  new Colossus(),
  new Cheetah(),
  new Hermes(),
  new RNSeal(),
  new Shiver(),
  new ExpandedAmmoPack(),
];

export default HardwareEpicArray;
