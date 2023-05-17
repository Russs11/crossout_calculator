import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Trucker } from '../cabins/rare'
import { RacingWheelST, LandingGearST, RacingWheel, LandingGear } from '../movement/rare'
import { LittleBoy6LB, DTCobra, AD12Falcon } from '../weapons/rare'
import { R2Chill, AmmoPack, Blastoff, CSTaymyr, TS1Horizon, RD1Listener } from './rare'

export class Chameleon extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Хамелеон'
    this.type = 'Невидимость'
    this.ingredients = [new LandingGear(), new CSTaymyr()]
  }
}
export class KA1Discharger extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'КА-1 Разрядник'
    this.type = 'Ускоритель перезарядки'
    this.scrapMetal = 200
    this.copper = 200
    this.plastic = 30
    this.ingredients = [new CSTaymyr(), new Trucker()]
  }
}
export class OculusVI extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Окулус VI'
    this.type = 'Радар'
    this.ingredients = [new RD1Listener(), new TS1Horizon()]
  }
}
export class Maxwell extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Максвелл'
    this.type = 'Радар'
    this.ingredients = [new LandingGearST(), new TS1Horizon()]
  }
}
export class PU1Charge extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'ЭУ-1 Заряд'
    this.type = 'Генератор'
    this.ingredients = [new DTCobra(), new TS1Horizon()]
  }
}
export class Ampere extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Ампер'
    this.type = 'Генератор'
    this.ingredients = [new RacingWheelST(), new R2Chill()]
  }
}
export class Hardcore extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Жесткач'
    this.type = 'Двигатель'
    this.ingredients = [new Blastoff(), new CSTaymyr()]
  }
}
export class Razorback extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Работяга'
    this.type = 'Двигатель'
    this.ingredients = [new Trucker(), new LittleBoy6LB()]
  }
}
export class DunHorse extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Саврас'
    this.type = 'Двигатель'
    this.ingredients = [new RacingWheel(), new R2Chill()]
  }
}
export class Genesis extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Генезис'
    this.type = 'Боеприпасы'
    this.ingredients = [new AD12Falcon(), new AmmoPack()]
  }
}