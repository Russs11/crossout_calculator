import { RareVehicleComponent } from '../rareVehicleComponent'
import { RS1Ruby } from '../hardware/common'
import { Lupara } from '../weapons/common'
import { Docker, Huntsman, Sprinter } from './common'

export class Growl extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Рык'
    this.type = 'Легкая кабина'
    this.scrapMetal = 700
    this.ingredients = [new Sprinter(), new Lupara()]
  }
}
export class Wyvern extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Виверна'
    this.type = 'Средняя кабина'
    this.scrapMetal = 700
    this.ingredients = [new Huntsman(), new RS1Ruby()]
  }
}
export class Trucker extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Дальнобой'
    this.type = 'Тяжелая кабина'
    this.scrapMetal = 700
    this.ingredients = [new Sprinter(), new Docker()]
  }
}