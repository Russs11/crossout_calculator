import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Hardcore, Razorback, Genesis, PU1Charge, Ampere, OculusVI } from '../hardware/special'
import { APCWheel, APCWheelST, Shiv, ShivST } from '../movement/special'
import { Goblin, Buzzsaw, Synthesis, Sinus0, Tempura, AD13Hawk } from '../weapons/special'
import { Jawbreaker, Bat, Pilgrim } from './special'

export class Jannabi extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Джаннаби'
    this.type = 'Легкая кабина'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Bat(), new Tempura(), new Razorback()]
  }
}
export class Harpy extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гарпия'
    this.type = 'Легкая кабина'
    this.ingredients = [new Bat(), new Shiv(), new Sinus0()]
  }
}
export class Werewolf extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Оборотень'
    this.type = 'Легкая кабина'
    this.ingredients = [new Bat(), new ShivST(), new Ampere()]
  }
}
export class Aggressor extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Агрессор'
    this.type = 'Легкая кабина'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Hardcore(), new Goblin(), new Buzzsaw()]
  }
}
export class Quantum extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Квант'
    this.type = 'Средняя кабина'
    this.ingredients = [new Pilgrim(), new Genesis(), new AD13Hawk()]
  }
}
export class Photon extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Фотон'
    this.type = 'Средняя кабина'
    this.ingredients = [new Pilgrim(), new Synthesis(), new AD13Hawk()]
  }
}
export class Humpback extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Горбун'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Jawbreaker(), new APCWheel(), new Razorback()]
  }
}
export class Bastion extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Бастион'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Jawbreaker(), new APCWheelST(), new PU1Charge()]
  }
}