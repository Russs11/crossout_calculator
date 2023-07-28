import { CommonVehicleComponent } from '../commonVehicleComponent'
import * as MovementImages from './MovementImages'
export class SmallWheel extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 401
    this.name = 'Колесо малое'
    this.type = 'Колесо легкое'
    this.scrapMetal = 15
    this.copper = 3
    this.img = MovementImages.SmallWheel
  }
}
export class SmallWheelST extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 402
    this.name = 'Колесо малое (пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 15
    this.copper = 3
    this.img = MovementImages.SmallWheelST
  }
}
export class MediumWheel extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 403
    this.name = 'Колесо среднее'
    this.type = 'Колесо среднее'
    this.scrapMetal = 15
    this.copper = 3
    this.img = MovementImages.MediumWheel
  }
}
export class MediumWheelST extends CommonVehicleComponent {
  constructor() {
    super()
    this.id = 404
    this.name = 'Колесо среднее (пов.)'
    this.type = 'Колесо среднее'
    this.scrapMetal = 15
    this.copper = 3
    this.img = MovementImages.MediumWheelST
  }
}