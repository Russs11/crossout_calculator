import { CommonVehicleComponent } from '../commonVehicleComponent'
import * as CabinsImages from './CabinsImages'
export class Sprinter extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 101
    this.name = 'Спринтер'
    this.type = 'Легкая кабина'
    this.scrapMetal = 75
    this.copper = 15
    this.img = CabinsImages.Sprinter
  }
}
export class Huntsman extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 102
    this.name = 'Егерь'
    this.type = 'Средняя кабина'
    this.scrapMetal = 75
    this.copper = 15
    this.img = CabinsImages.Huntsman
  }
}
export class WWT1 extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 103
    this.name = 'WWT1'
    this.type = 'Средняя кабина'
    this.scrapMetal = 75
    this.copper = 15
    this.img = CabinsImages.WWT1
  }
}
export class Docker extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 104
    this.name = 'Докер'
    this.type = 'Тяжелая кабина'
    this.scrapMetal = 75
    this.copper = 15
    this.img = CabinsImages.Docker
  }
}