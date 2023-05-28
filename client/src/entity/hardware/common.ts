import { CommonVehicleComponent } from '../commonVehicleComponent'
import * as HardwareImages from './HardwareImages'
export class FuelBarrel extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 301
    this.name = 'Топливная бочка'
    this.type = 'Особый модуль'
    this.scrapMetal = 60
    this.copper = 12
    this.img = HardwareImages.FuelBarrel
  }
}
export class CarJack extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 302
    this.name = 'Домкрат'
    this.type = 'Особый модуль'
    this.scrapMetal = 20
    this.copper = 4
    this.img = HardwareImages.CarJack
  }
}
export class Radio extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 303
    this.name = 'Радио'
    this.type = 'Особый модуль'
    this.scrapMetal = 20
    this.copper = 4
    this.img = HardwareImages.Radio
  }
}
export class RS1Ruby extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 304
    this.name = 'РУ-1 Рубин'
    this.type = 'Радар'
    this.scrapMetal = 35
    this.copper = 8
    this.img = HardwareImages.RS1Ruby
  }
}
export class B1Aviator extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 305
    this.name = 'У-1 Авиатор'
    this.type = ''
    this.scrapMetal = 55
    this.copper = 11
    this.img = HardwareImages.B1Aviator
  }
}

export class R1Breese extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 306
    this.name = 'Р-1 Холодок'
    this.type = 'Радиатор'
    this.scrapMetal = 20
    this.copper = 4
    this.img = HardwareImages.R1Breese
  }
}