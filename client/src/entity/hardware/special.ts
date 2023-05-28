import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Trucker } from '../cabins/rare'
import { RacingWheelST, LandingGearST, RacingWheel, LandingGear } from '../movement/rare'
import { LittleBoy6LB, DTCobra, AD12Falcon } from '../weapons/rare'
import { R2Chill, AmmoPack, Blastoff, CSTaymyr, TS1Horizon, RD1Listener } from './rare'
import * as HardwareImages from './HardwareImages'
export class Chameleon extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 315
    this.name = 'Хамелеон'
    this.type = 'Невидимость'
    this.ingredients = [new LandingGear(), new CSTaymyr()]
    this.img = HardwareImages.Chameleon
  }
}
export class KA1Discharger extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 316
    this.name = 'КА-1 Разрядник'
    this.type = 'Ускоритель перезарядки'
    this.scrapMetal = 200
    this.copper = 200
    this.plastic = 30
    this.ingredients = [new CSTaymyr(), new Trucker()]
    this.img = HardwareImages.KA1Discharger
  }
}
export class OculusVI extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 317
    this.name = 'Окулус VI'
    this.type = 'Радар'
    this.ingredients = [new RD1Listener(), new TS1Horizon()]
    this.img = HardwareImages.OculusVI
  }
}
export class Maxwell extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 318
    this.name = 'Максвелл'
    this.type = 'Радар'
    this.ingredients = [new LandingGearST(), new TS1Horizon()]
    this.img = HardwareImages.Maxwell
  }
}
export class PU1Charge extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 319
    this.name = 'ЭУ-1 Заряд'
    this.type = 'Генератор'
    this.ingredients = [new DTCobra(), new TS1Horizon()]
    this.img = HardwareImages.PU1Charge
  }
}
export class Ampere extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 320
    this.name = 'Ампер'
    this.type = 'Генератор'
    this.ingredients = [new RacingWheelST(), new R2Chill()]
    this.img = HardwareImages.Ampere
  }
}
export class Hardcore extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 321
    this.name = 'Жесткач'
    this.type = 'Двигатель'
    this.ingredients = [new Blastoff(), new CSTaymyr()]
    this.img = HardwareImages.Hardcore
  }
}
export class Razorback extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 322
    this.name = 'Работяга'
    this.type = 'Двигатель'
    this.ingredients = [new Trucker(), new LittleBoy6LB()]
    this.img = HardwareImages.Razorback
  }
}
export class DunHorse extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 323
    this.name = 'Саврас'
    this.type = 'Двигатель'
    this.ingredients = [new RacingWheel(), new R2Chill()]
    this.img = HardwareImages.DunHorse
  }
}
export class Genesis extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 324
    this.name = 'Генезис'
    this.type = 'Боеприпасы'
    this.ingredients = [new AD12Falcon(), new AmmoPack()]
    this.img = HardwareImages.Genesis
  }
}