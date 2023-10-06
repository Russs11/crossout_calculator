import { RareVehicleComponent } from "../rareVehicleComponent";
import * as MovementImages from "./MovementImages";
// import { WWT1 } from "../cabins/common";
// import { MediumWheel, MediumWheelST, SmallWheel, SmallWheelST } from './common'
import MovementCommonArray from "./common";
import CabinsCommonArray from "../cabins/common";

let [SmallWheel, SmallWheelST, MediumWheel, MediumWheelST] =
  MovementCommonArray;
let [Sprinter, Huntsman, WWT1, Docker] = CabinsCommonArray;

class StuddedWheel extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 405;
    this.name = "Колесо с шипами";
    this.type = "Колесо легкое";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheel, MediumWheel];
    this.img = MovementImages.StuddedWheel;
  }
}
class StuddedWheelST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 406;
    this.name = "Колесо с шипами(пов.)";
    this.type = "Колесо легкое";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheelST, MediumWheelST];
    this.img = MovementImages.StuddedWheelST;
  }
}
class ChainedWheel extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 407;
    this.name = "Колесо с цепями";
    this.type = "Колесо легкое";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheel, SmallWheel];
    this.img = MovementImages.ChainedWheel;
  }
}

class ChainedWheelST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 408;
    this.name = "Колесо с цепями (пов.)";
    this.type = "Колесо легкое";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheelST, SmallWheelST];
    this.img = MovementImages.ChainedWheelST;
  }
}
class BalloonTyre extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 409;
    this.name = "Шина-баллон";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheel, MediumWheel];
    this.img = MovementImages.BalloonTyre;
  }
}

class BalloonTyreST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 410;
    this.name = "Шина-баллон (пов.)";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheelST, SmallWheelST];
    this.img = MovementImages.BalloonTyreST;
  }
}
class RacingWheel extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 411;
    this.name = "Колесо гоночное";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheel, SmallWheel];
    this.img = MovementImages.RacingWheel;
  }
}

class RacingWheelST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 412;
    this.name = "Колесо гоночное (пов.)";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheelST, SmallWheelST];
    this.img = MovementImages.RacingWheelST;
  }
}
class LandingGear extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 413;
    this.name = "Посадочное шасси";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheel, MediumWheel];
    this.img = MovementImages.LandingGear;
  }
}
class LandingGearST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 414;
    this.name = "Посадочное шасси (пов.)";
    this.type = "Колесо среднее";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheelST, MediumWheelST];
    this.img = MovementImages.LandingGearST;
  }
}
class LargeWheel extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 415;
    this.name = "Колесо большое";
    this.type = "Колесо тяжелое";
    this.scrapMetal = 600;
    this.ingredients = [SmallWheel, WWT1];
    this.img = MovementImages.LargeWheel;
  }
}
class LargeWheelST extends RareVehicleComponent {
  constructor() {
    super();
    this.id = 416;
    this.name = "Колесо большое (пов.)";
    this.type = "Колесо тяжелое";
    this.scrapMetal = 600;
    this.ingredients = [MediumWheelST, WWT1];
    this.img = MovementImages.LargeWheelST;
  }
}

const MovementRareArray: RareVehicleComponent[] = [
  new StuddedWheel(),
  new StuddedWheelST(),
  new ChainedWheel(),
  new ChainedWheelST(),
  new BalloonTyre(),
  new BalloonTyreST(),
  new RacingWheel(),
  new RacingWheelST(),
  new LandingGear(),
  new LandingGearST(),
  new LargeWheel(),
  new LargeWheelST(),
];

export default MovementRareArray;
