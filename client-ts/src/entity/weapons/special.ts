import { SpecialVehicleComponent } from "../specialVehicleComponent";
import { Growl, Wyvern } from "../cabins/rare";
import CabinsRareArray from "../cabins/rare";
import HardwareRareArray from "../hardware/rare";
import WeaponsRareArray from "./rare";
// import {
//   AmmoPack,
//   BigG,
//   Blastoff,
//   CSTaymyr,
//   FuelTank,
//   R2Chill,
//   RD1Listener,
// } from "../hardware/rare";
// import {
//   AC43Rapier,
//   AD12Falcon,
//   Borer,
//   DTCobra,
//   Judge76mm,
//   LittleBoy6LB,
//   Sledgehammer,
//   Spitfire,
//   STM23Defender,
//   Vector,
//   Wasp,
// } from "./rare";
import * as WeaponImages from "./WeaponImages";

let [Growl, Wyvern, Trucker] = CabinsRareArray

class M37Piercer extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 215;
    this.name = "П-37 Шило";
    this.type = "Пулемет";
    this.scrapMetal = 250;
    this.engravedCasings = 450;
    this.ingredients = [new Vector(), new BigG()];
    this.img = WeaponImages.M37Piercer;
  }
}
class Sinus0 extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 216;
    this.name = "Синус-0";
    this.type = "Пулемет";
    this.ingredients = [new Vector(), new AC43Rapier()];
    this.img = WeaponImages.Sinus0;
  }
}
class Goblin extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 217;
    this.name = "Гоблин";
    this.type = "Дробовик";
    this.ingredients = [new Wasp(), new Spitfire()];
    this.img = WeaponImages.Goblin
  }
}
class Junkbow extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 218;
    this.name = "Самопал";
    this.type = "Дробовик";
    this.ingredients = [new Sledgehammer(), new Growl()];
    this.img = WeaponImages.Junkbow
  }
}
class Mace extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 219;
    this.name = "Булава";
    this.type = "Дробовик";
    this.ingredients = [new Sledgehammer(), new Spitfire()];
    this.img = WeaponImages.Mace
  }
}
class AC50Storm extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 220;
    this.name = "АП50 Шторм";
    this.type = "Автопушка";
    this.ingredients = [new STM23Defender(), new AC43Rapier()];
    this.img = WeaponImages.AC50Storm
  }
}
class ZS33Hulk extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 221;
    this.name = "ЗИС-33 Верзила";
    this.type = "Пушка";
    this.ingredients = [new Judge76mm(), new FuelTank()];
    this.img = WeaponImages.ZS33Hulk
  }
}
class Prosecutor76mm extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 222;
    this.name = "Обвинитель 76мм";
    this.type = "Пушка";
    this.ingredients = [new Judge76mm(), new AmmoPack()];
    this.img = WeaponImages.Prosecutor76mm
  }
}
class Synthesis extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 223;
    this.name = "Синтез";
    this.type = "Энергетическое оружие";
    this.ingredients = [new Vector(), new Wyvern()];
    this.img = WeaponImages.Synthesis
  }
}
class Boom extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 224;
    this.name = "Бум";
    this.type = "Контактное оружие";
    this.ingredients = [new Wasp(), new FuelTank()];
    this.img = WeaponImages.Boom
  }
}
class Tempura extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 225;
    this.name = "Темпура";
    this.type = "Контактное оружие";
    this.scrapMetal = 200;
    this.wires = 200;
    this.plastic = 30;
    this.ingredients = [new Borer(), new RD1Listener()];
    this.img = WeaponImages.Tempura
  }
}
class Buzzsaw extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 226;
    this.name = "Циркулярка";
    this.type = "Контактное оружие";
    this.ingredients = [new Blastoff(), new LittleBoy6LB()];
    this.img = WeaponImages.Buzzsaw
  }
}
class AD13Hawk extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 227;
    this.name = "АД-13 Ястреб";
    this.type = "Дрон";
    this.ingredients = [new AD12Falcon(), new CSTaymyr()];
    this.img = WeaponImages.AD13Hawk
  }
}
class Sidekick extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 228;
    this.name = "Прихвостень";
    this.type = "Дрон";
    this.ingredients = [new DTCobra(), new Borer()];
    this.img = WeaponImages.Sidekick
  }
}
class T3Python extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 229;
    this.name = "ТЗ Питон";
    this.type = "Дрон";
    this.ingredients = [new DTCobra(), new R2Chill()];
    this.img = WeaponImages.T3Python
  }
}
