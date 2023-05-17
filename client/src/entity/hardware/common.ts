import { CommonVehicleComponent } from '../commonVehicleComponent'

export class FuelBarrel extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Топливная бочка'
    this.type = 'Особый модуль'
    this.scrapMetal = 60
    this.copper = 12
  }
}
export class CarJack extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Домкрат'
    this.type = 'Особый модуль'
    this.scrapMetal = 20
    this.copper = 4
  }
}
export class Radio extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Радио'
    this.type = 'Особый модуль'
    this.scrapMetal = 20
    this.copper = 4
  }
}
export class RS1Ruby extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'РУ-1 Рубин'
    this.type = 'Радар'
    this.scrapMetal = 35
    this.copper = 8
  }
}
export class B1Aviator extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'У-1 Авиатор'
    this.type = ''
    this.scrapMetal = 55
    this.copper = 11
  }
}

export class R1Breese extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Р-1 Холодок'
    this.type = 'Радиатор'
    this.scrapMetal = 20
    this.copper = 4
  }
}

