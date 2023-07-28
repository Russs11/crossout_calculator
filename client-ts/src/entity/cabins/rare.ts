import { RareVehicleComponent } from '../rareVehicleComponent'
import { RS1Ruby } from '../hardware/common'
import { Lupara } from '../weapons/common'
import { Docker, Huntsman, Sprinter } from './common'
import * as CabinsImages from './CabinsImages'
export class Growl extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 105
    this.name = 'Рык'
    this.type = 'Легкая кабина'
    this.scrapMetal = 700
    this.ingredients = [new Sprinter(), new Lupara()]
    this.img = CabinsImages.Growl
  }
}
export class Wyvern extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 106
    this.name = 'Виверна'
    this.type = 'Средняя кабина'
    this.scrapMetal = 700
    this.ingredients = [new Huntsman(), new RS1Ruby()]
    this.img = CabinsImages.Wyvern
  }
}
export class Trucker extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 107
    this.name = 'Дальнобой'
    this.type = 'Тяжелая кабина'
    this.scrapMetal = 700
    this.ingredients = [new Sprinter(), new Docker()]
    this.img = CabinsImages.Trucker
  }
}