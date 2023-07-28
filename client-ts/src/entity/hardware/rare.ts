import { RareVehicleComponent } from '../rareVehicleComponent'
import { Docker, Huntsman } from '../cabins/common'
import { SmallWheel } from '../movement/common'
import { Avenger57mm } from '../weapons/common'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from './common'
import * as HardwareImages from './HardwareImages'

export class FuelTank extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 307
    this.name = 'Топливный бак'
    this.type = 'Особый модуль'
    this.ingredients = [new FuelBarrel(), new Docker()]
    this.img = HardwareImages.FuelTank
  }
}
export class RD1Listener extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 308
    this.name = 'РЛС-1 Слухач'
    this.type = 'Радар'
    this.ingredients = [new FuelBarrel(), new RS1Ruby()]
    this.img = HardwareImages.RD1Listener
  }
}
export class TS1Horizon extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 309
    this.name = 'СП-1 Горизонт'
    this.type = 'Прицел'
    this.ingredients = [new Radio(), new SmallWheel()]
    this.img = HardwareImages.TS1Horizon
  }
}
export class BigG extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 310
    this.name = 'Генка'
    this.type = 'Генератор'
    this.scrapMetal = 700
    this.ingredients = [new B1Aviator(), new Avenger57mm()]
    this.img = HardwareImages.BigG
  }
}
export class Blastoff extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 311
    this.name = 'Разгон'
    this.type = 'Ускоритель'
    this.ingredients = [new RS1Ruby(), new B1Aviator()]
    this.img = HardwareImages.Blastoff
  }
}
export class R2Chill extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 312
    this.name = 'Р-2 Стужа'
    this.type = 'Радиатор'
    this.ingredients = [new R1Breese(), new Radio()]
    this.img = HardwareImages.R2Chill
  }
}
export class CSTaymyr extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 313
    this.name = 'СО Таймыр'
    this.type = 'Охладитель'
    this.ingredients = [new Huntsman(), new R1Breese()]
    this.img = HardwareImages.CSTaymyr
  }
}
export class AmmoPack extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 314
    this.name = 'Боезапас'
    this.type = 'Боеприпасы'
    this.ingredients = [new CarJack(), new Radio()]
    this.img = HardwareImages.AmmoPack
  }
}