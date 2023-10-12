import { SpecialVehicleComponent } from "../specialVehicleComponent";
// import { StuddedWheel, ChainedWheel, StuddedWheelST, ChainedWheelST, LargeWheel, BalloonTyre, LargeWheelST, BalloonTyreST, RacingWheel, LandingGear, RacingWheelST, LandingGearST } from './rare'
import * as MovementImages from "./MovementImages";
import { RareVehicleComponent } from "../rareVehicleComponent";
import MovementRareArray from "./rare";
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
class LunarIV extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 417;
    this.name = "Лунар IV";
    this.type = "Колесо легкое";
    this.ingredients = [RacingWheel, LandingGear];
    this.img = MovementImages.LunarIV;
  }
}
class LunarIVST extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 418;
    this.name = "Лунар IV(пов.)";
    this.type = "Колесо легкое";
    this.ingredients = [RacingWheelST, LandingGearST];
    this.img = MovementImages.LunarIVST;
  }
}
class Camber extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 419;
    this.name = "Развал";
    this.type = "Колесо легкое";
    this.scrapMetal = 200;
    this.wires = 200;
    this.plastic = 30;
    this.ingredients = [RacingWheel, BalloonTyre];
    this.img = MovementImages.Camber;
  }
}
class CamberST extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 420;
    this.name = "Развал(пов.)";
    this.type = "Колесо легкое";
    this.scrapMetal = 200;
    this.wires = 200;
    this.plastic = 30;
    this.ingredients = [RacingWheelST, BalloonTyreST];
    this.img = MovementImages.CamberST;
  }
}
class Shiv extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 421;
    this.name = "Заточка";
    this.type = "Колесо среднее";
    this.ingredients = [StuddedWheel, ChainedWheel];
    this.img = MovementImages.Shiv;
  }
}
class ShivST extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 422;
    this.name = "Заточка(пов.)";
    this.type = "Колесо среднее";
    this.ingredients = [StuddedWheelST, ChainedWheelST];
    this.img = MovementImages.ShivST;
  }
}
class APCWheel extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 423;
    this.name = "Колесо броневика";
    this.type = "Колесо тяжелое";
    this.ingredients = [LargeWheel, BalloonTyre];
    this.img = MovementImages.APCWheel;
  }
}
class APCWheelST extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 424;
    this.name = "Колесо броневика(пов.)";
    this.type = "Колесо тяжелое";
    this.ingredients = [LargeWheelST, BalloonTyreST];
    this.img = MovementImages.APCWheelST;
  }
}
class TwinWheel extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 425;
    this.name = "Колесо двойное";
    this.type = "Колесо тяжелое";
    this.ingredients = [LargeWheel, BalloonTyre];
    this.img = MovementImages.TwinWheel;
  }
}
class TwinWheelST extends SpecialVehicleComponent {
  constructor() {
    super();
    this.id = 426;
    this.name = "Колесо двойное(пов.)";
    this.type = "Колесо тяжелое";
    this.ingredients = [LargeWheelST, BalloonTyreST];
    this.img = MovementImages.TwinWheelST;
  }
}


const MovementSpecialArray: SpecialVehicleComponent[] = [new LunarIV(),
new LunarIVST(),
new Camber(),
new CamberST(),
new Shiv(),
new ShivST(),
new APCWheel(),
new APCWheelST(),
new TwinWheel(),
new TwinWheelST() 
]

export default MovementSpecialArray;