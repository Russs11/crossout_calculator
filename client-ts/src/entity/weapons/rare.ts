import { RareVehicleComponent } from "../rareVehicleComponent";
import { CommonVehicleComponent } from "../commonVehicleComponent";
import HardwareCommonArray from "../hardware/common";
import MovementCommonArray from "../movement/common";
import WeaponsCommonArray from "./common";
import * as WeaponImages from "./WeaponImages";

let [P54MAccord, Lupara, Avenger57mm]: CommonVehicleComponent[] =
  WeaponsCommonArray;
let [FuelBarrel, CarJack, Radio, RS1Ruby, B1Aviator, R1Breese]:CommonVehicleComponent[] =
  HardwareCommonArray;

let MediumWheelST: CommonVehicleComponent = MovementCommonArray[3];
class STM23Defender extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 204;
    this.name = "П-23 Защитник";
    this.type = "Пулемет";
    this.ingredients = [P54MAccord, R1Breese];
    this.img = WeaponImages.STM23Defender;
  }
}
class Vector extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 205;
    this.name = "Вектор";
    this.type = "Пулемет";
    this.ingredients = [P54MAccord, CarJack];
    this.img = WeaponImages.Vector;
  }
}
class Sledgehammer extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 206;
    this.name = "Кувалда";
    this.type = "Дробовик";
    this.ingredients = [Lupara, CarJack];
    this.img = WeaponImages.Sledgehammer;
  }
}
class Spitfire extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 207;
    this.name = "Очаг";
    this.type = "Дробовик";
    this.ingredients = [Lupara, B1Aviator];
    this.img = WeaponImages.Spitfire;
  }
}
class AC43Rapier extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 208;
    this.name = "АП43 Рапира";
    this.type = "Автопушка";
    this.ingredients = [B1Aviator, P54MAccord];
    this.img = WeaponImages.AC43Rapier;
  }
}
class LittleBoy6LB extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 209;
    this.name = "Малыш 6Ф";
    this.type = "Пушка";
    this.ingredients = [Avenger57mm, FuelBarrel];
    this.img = WeaponImages.LittleBoy6LB;
  }
}
class Judge76mm extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 210;
    this.name = "Судья 76мм";
    this.type = "Пушка";
    this.ingredients = [Avenger57mm, MediumWheelST];
    this.img = WeaponImages.Judge76mm;
  }
}
class Wasp extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 211;
    this.name = "Оса";
    this.type = "Ракетница";
    this.ingredients = [Avenger57mm, FuelBarrel];
    this.img = WeaponImages.Wasp;
  }
}
class Borer extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 212;
    this.name = "Бур";
    this.type = "Контактное оружие";
    this.ingredients = [CarJack, R1Breese];
    this.img = WeaponImages.Borer;
  }
}
class AD12Falcon extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 213;
    this.name = "АД-12 Сокол";
    this.type = "Дрон";
    this.ingredients = [P54MAccord, RS1Ruby];
    this.img = WeaponImages.AD12Falcon;
  }
}
class DTCobra extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 214;
    this.name = "Т3 Кобра";
    this.type = "Дрон";
    this.ingredients = [Radio, Lupara];
    this.img = WeaponImages.DTCobra;
  }
}

const WeaponsRareArray: RareVehicleComponent[] = [
  new STM23Defender(),
  new Vector(),
  new Sledgehammer(),
  new Spitfire(),
  new AC43Rapier(),
  new LittleBoy6LB(),
  new Judge76mm(),
  new Wasp(),
  new Borer(),
  new AD12Falcon(),
  new DTCobra(),
];
export default WeaponsRareArray;
