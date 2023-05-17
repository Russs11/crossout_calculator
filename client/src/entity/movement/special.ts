import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { StuddedWheel, ChainedWheel, StuddedWheelST, ChainedWheelST, LargeWheel, BalloonTyre, LargeWheelST, BalloonTyreST, RacingWheel, LandingGear, RacingWheelST, LandingGearST } from './rare'

export class LunarIV extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Лунар IV'
    this.type = 'Колесо легкое'
    this.ingredients = [new RacingWheel(), new LandingGear()]
  }
}
export class LunarIVST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Лунар IV(пов.)'
    this.type = 'Колесо легкое'
    this.ingredients = [new RacingWheelST(), new LandingGearST()]
  }
}
export class Camber extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Развал'
    this.type = 'Колесо легкое'
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new RacingWheel(), new BalloonTyre()]
  }
}
export class CamberST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Развал(пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new RacingWheelST(), new BalloonTyreST()]
  }
}
export class Shiv extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Заточка'
    this.type = 'Колесо среднее'
    this.ingredients = [new StuddedWheel(), new ChainedWheel()]
  }
}
export class ShivST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Заточка(пов.)'
    this.type = 'Колесо среднее'
    this.ingredients = [new StuddedWheelST(), new ChainedWheelST()]
  }
}
export class APCWheel extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо броневика'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheel(), new BalloonTyre()]
  }
}
export class APCWheelST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо броневика(пов.)'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheelST(), new BalloonTyreST()]
  }
}
export class TwinWheel extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо двойное'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheel(), new BalloonTyre()]
  }
}
export class TwinWheelST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо двойное(пов.)'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheelST(), new BalloonTyreST()]
  }
}