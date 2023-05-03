import { CommonVehicleComponent } from '../commonVehicleComponent'

export class SmallWheel extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо малое'
    this.type = 'Колесо легкое'
    this.scrapMetal = 15
    this.copper = 3
  }
}
export class SmallWheelST extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо малое (пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 15
    this.copper = 3
  }
}
export class MediumWheel extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо среднее'
    this.type = 'Колесо среднее'
    this.scrapMetal = 15
    this.copper = 3
  }
}
export class MediumWheelST extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Колесо среднее (пов.)'
    this.type = 'Колесо среднее'
    this.scrapMetal = 15
    this.copper = 3
  }
}