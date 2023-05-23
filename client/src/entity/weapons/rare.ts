import { RareVehicleComponent } from "../rareVehicleComponent";
import {
  B1Aviator,
  CarJack,
  FuelBarrel,
  R1Breese,
  Radio,
  RS1Ruby,
} from "../hardware/common";
import { MediumWheelST } from "../movement/common";
import { Avenger57mm, Lupara, P54MAccord } from "./common";
import * as WeaponImages from "./WeaponImages";

export class STM23Defender extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 204;
    this.name = "П-23 Защитник";
    this.type = "Пулемет";
    this.ingredients = [new P54MAccord(), new R1Breese()];
    this.img = WeaponImages.STM23Defender;
  }
}
export class Vector extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 205;
    this.name = "Вектор";
    this.type = "Пулемет";
    this.ingredients = [new P54MAccord(), new CarJack()];
    this.img = WeaponImages.Vector;
  }
}
export class Sledgehammer extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 206;
    this.name = "Кувалда";
    this.type = "Дробовик";
    this.ingredients = [new Lupara(), new CarJack()];
    this.img = WeaponImages.Sledgehammer
  }
}
export class Spitfire extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 207;
    this.name = "Очаг";
    this.type = "Дробовик";
    this.ingredients = [new Lupara(), new B1Aviator()];
    this.img = WeaponImages.Spitfire
  }
}
export class AC43Rapier extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 208;
    this.name = "АП43 Рапира";
    this.type = "Автопушка";
    this.ingredients = [new B1Aviator(), new P54MAccord()];
    this.img = WeaponImages.AC43Rapier
  }
}
export class LittleBoy6LB extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 209;
    this.name = "Малыш 6Ф";
    this.type = "Пушка";
    this.ingredients = [new Avenger57mm(), new FuelBarrel()];
    this.img = WeaponImages.LittleBoy6LB
  }
}
export class Judge76mm extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 210;
    this.name = "Судья 76мм";
    this.type = "Пушка";
    this.ingredients = [new Avenger57mm(), new MediumWheelST()];
    this.img = WeaponImages.Judge76mm
  }
}
export class Wasp extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 211;
    this.name = "Оса";
    this.type = "Ракетница";
    this.ingredients = [new Avenger57mm(), new FuelBarrel()];
    this.img = WeaponImages.Wasp
  }
}
export class Borer extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 212;
    this.name = "Бур";
    this.type = "Контактное оружие";
    this.ingredients = [new CarJack(), new R1Breese()];
    this.img = WeaponImages.Borer
  }
}
export class AD12Falcon extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 213;
    this.name = "АД-12 Сокол";
    this.type = "Дрон";
    this.ingredients = [new P54MAccord(), new RS1Ruby()];
    this.img = WeaponImages.AD12Falcon
  }
}
export class DTCobra extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 214;
    this.name = "Т3 Кобра";
    this.type = "Дрон";
    this.ingredients = [new Radio(), new Lupara()];
    this.img = WeaponImages.DTCobra
  }
}
