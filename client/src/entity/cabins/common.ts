import { CommonVehicleComponent } from '../commonVehicleComponent'

export class Sprinter extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 201
    this.name = 'Спринтер'
    this.type = 'Легкая кабина'
    this.scrapMetal = 75
    this.copper = 15
    
  }
}
export class Huntsman extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 202;
    this.name = 'Егерь'
    this.type = 'Средняя кабина'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class WWT1 extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 203;
    this.name = 'WWT1'
    this.type = 'Средняя кабина'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class Docker extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 204;
    this.name = 'Докер'
    this.type = 'Тяжелая кабина'
    this.scrapMetal = 75
    this.copper = 15
  }
}