import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Hardcore, Razorback, Genesis, PU1Charge, Ampere, OculusVI } from '../hardware/special'
import { APCWheel, APCWheelST, Shiv, ShivST } from '../movement/special'
import { Goblin, Buzzsaw, Synthesis, Sinus0, Tempura, AD13Hawk } from '../weapons/special'
import { Jawbreaker, Bat, Pilgrim } from './special'
import * as CabinsImages from './CabinsImages'

export class Jannabi extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 111
    this.name = 'Джаннаби'
    this.type = 'Легкая кабина'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Bat(), new Tempura(), new Razorback()]
    this.img = CabinsImages.Jannabi
  }
}
export class Harpy extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 112
    this.name = 'Гарпия'
    this.type = 'Легкая кабина'
    this.ingredients = [new Bat(), new Shiv(), new Sinus0()]
    this.img = CabinsImages.Harpy
  }
}
export class Werewolf extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 113
    this.name = 'Оборотень'
    this.type = 'Легкая кабина'
    this.ingredients = [new Bat(), new ShivST(), new Ampere()]
    this.img = CabinsImages.Werewolf
  }
}
export class Aggressor extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 114
    this.name = 'Агрессор'
    this.type = 'Легкая кабина'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Hardcore(), new Goblin(), new Buzzsaw()]
    this.img = CabinsImages.Aggressor
  }
}
export class Quantum extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 115
    this.name = 'Квант'
    this.type = 'Средняя кабина'
    this.ingredients = [new Pilgrim(), new Genesis(), new AD13Hawk()]
    this.img = CabinsImages.Quantum
  }
}
export class Photon extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 116
    this.name = 'Фотон'
    this.type = 'Средняя кабина'
    this.ingredients = [new Pilgrim(), new Synthesis(), new AD13Hawk()]
    this.img = CabinsImages.Photon
  }
}
export class Humpback extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 117
    this.name = 'Горбун'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Jawbreaker(), new APCWheel(), new Razorback()]
    this.img = CabinsImages.Humpback
  }
}
export class Bastion extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 118
    this.name = 'Бастион'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Jawbreaker(), new APCWheelST(), new PU1Charge()]
    this.img = CabinsImages.Bastion
  }
}