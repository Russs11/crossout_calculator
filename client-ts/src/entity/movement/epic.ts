import { EpicVehicleComponent } from "../epicVehicleComponent";
import * as MovementImages from "./MovementImages";
import { SpecialVehicleComponent } from "../specialVehicleComponent";
import CabinsSpecialArray from "../cabins/special";
import HardwareSpecialArray from "../hardware/special";
import WeaponSpecialArray from "../weapons/special";
import MovementSpecialArray from "./special";


const Bat: SpecialVehicleComponent = CabinsSpecialArray[0];

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
class BuggyWheel extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 427;
    this.name = "Колесо багги";
    this.type = "Колесо легкое";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ Buzzsaw,  Hardcore,  Mace];
    this.img = MovementImages.BuggyWheel;
  }
}
class BuggyWheelST extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 428;
    this.name = "Колесо багги (пов.)";
    this.type = "Колесо легкое";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ Buzzsaw,  Mace,  Boom];
    this.img = MovementImages.BuggyWheelST;
  }
}
class Bigfoot extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 429;
    this.name = "Бигфут";
    this.type = "Колесо тяжелое";
    this.ingredients = [ Shiv,  Bat,  TwinWheel];
    this.img = MovementImages.Bigfoot;
  }
}
class BigfootST extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 430;
    this.name = "Бигфут (пов.)";
    this.type = "Колесо тяжелое";
    this.ingredients = [ ShivST,  Bat,  TwinWheelST];
    this.img = MovementImages.BigfootST;
  }
}
class Omni extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 431;
    this.name = "Омни";
    this.type = "Роликонесущая ходовая";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ Camber,  CamberST,  TwinWheelST];
    this.img = MovementImages.Omni;
  }
}
class SmallTrack extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 432;
    this.name = "Гусеница малая";
    this.type = "Гусеница";
    this.ingredients = [ Hardcore,  Buzzsaw,  Mace];
    this.img = MovementImages.SmallTrack;
  }
}
class HardenedTrack extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 433;
    this.name = "Гусеница укрепленная";
    this.type = "Гусеница";
    this.ingredients = [ Ampere,  Chameleon,  DunHorse];
    this.img = MovementImages.HardenedTrack;
  }
}
class ArmoredTrack extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 434;
    this.name = "Гусеница бронированная";
    this.type = "Гусеница";
    this.ingredients = [ TwinWheel,  TwinWheelST,  Razorback];
    this.img = MovementImages.ArmoredTrack;
  }
}
class IcarusVII extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 435;
    this.name = "Икар VII";
    this.type = "Ховер";
    this.ingredients = [ LunarIVST,  LunarIV,  DunHorse];
    this.img = MovementImages.IcarusVII;
  }
}
class ML200 extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 436;
    this.name = "МН-Л 200";
    this.type = "Механическая нога";
    this.ingredients = [ Sidekick,  APCWheelST,  Razorback];
    this.img = MovementImages.ML200;
  }
}
class MeatGrinder extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 437;
    this.name = "Мясорубка";
    this.type = "Шнек";
    this.ingredients = [ Shiv,  ShivST,  Buzzsaw];
    this.img = MovementImages.MeatGrinder;
  }
}


const MovementEpicArray: EpicVehicleComponent[] = [
  new BuggyWheel(),
  new BuggyWheelST(),
  new Bigfoot(),
  new BigfootST(),
  new Omni(),
  new SmallTrack(),
  new HardenedTrack(),
  new ArmoredTrack(),
  new IcarusVII(),
  new ML200(),
  new MeatGrinder(),
];

export default MovementEpicArray;