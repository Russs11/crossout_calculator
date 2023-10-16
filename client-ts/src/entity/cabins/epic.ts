import { EpicVehicleComponent } from '../epicVehicleComponent'
// import HardwareSpecialArray, { Hardcore, Razorback, Genesis, PU1Charge, Ampere, OculusVI } from '../hardware/special'
// import { APCWheel, APCWheelST, Shiv, ShivST } from '../movement/special'
// import { Goblin, Buzzsaw, Synthesis, Sinus0, Tempura, AD13Hawk } from '../weapons/special'
// import { Jawbreaker, Bat, Pilgrim } from './special'
import * as CabinsImages from './CabinsImages'
import { SpecialVehicleComponent } from '../specialVehicleComponent'
import SpecialCabinsArray from './special'
import HardwareSpecialArray from '../hardware/special'
import MovementSpecialArray from '../movement/special'
import WeaponSpecialArray from '../weapons/special'

let [Chameleon,
  KA1Discharger,
  OculusVI,
  Maxwell,
  PU1Charge,
  Ampere,
  Hardcore,
  Razorback,
  DunHorse,
  Genesis,]: SpecialVehicleComponent[] = HardwareSpecialArray;


let [
  LunarIV,
  LunarIVST,
  Camber,
  CamberST,
  Shiv,
  ShivST,
  APCWheel,
  APCWheelST,
  TwinWheel,
  TwinWheelST,
]: SpecialVehicleComponent[] = MovementSpecialArray;

let [M37Piercer,
  Sinus0,
  Goblin,
  Junkbow,
  Mace,
  AC50Storm,
  ZS33Hulk,
  Prosecutor76mm,
  Synthesis,
  Boom,
  Tempura,
  Buzzsaw,
  AD13Hawk,
  Sidekick,
  T3Python]: SpecialVehicleComponent[] = WeaponSpecialArray;

let [Bat, Pilgrim, Jawbreaker]: SpecialVehicleComponent[] = SpecialCabinsArray;
class Jannabi extends EpicVehicleComponent {
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
    this.ingredients = [Bat, Tempura, Razorback]
    this.img = CabinsImages.Jannabi
  }
}
class Harpy extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 112
    this.name = 'Гарпия'
    this.type = 'Легкая кабина'
    this.ingredients = [Bat, Shiv, Sinus0]
    this.img = CabinsImages.Harpy
  }
}
class Werewolf extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 113
    this.name = 'Оборотень'
    this.type = 'Легкая кабина'
    this.ingredients = [Bat, ShivST, Ampere]
    this.img = CabinsImages.Werewolf
  }
}
class Aggressor extends EpicVehicleComponent {
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
    this.ingredients = [Hardcore, Goblin, Buzzsaw]
    this.img = CabinsImages.Aggressor
  }
}
class Quantum extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 115
    this.name = 'Квант'
    this.type = 'Средняя кабина'
    this.ingredients = [Pilgrim, Genesis, AD13Hawk]
    this.img = CabinsImages.Quantum
  }
}
class Photon extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 116
    this.name = 'Фотон'
    this.type = 'Средняя кабина'
    this.ingredients = [Pilgrim, Synthesis, AD13Hawk]
    this.img = CabinsImages.Photon
  }
}
class Humpback extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 117
    this.name = 'Горбун'
    this.type = 'Тяжелая кабина'
    this.ingredients = [Jawbreaker, APCWheel, Razorback]
    this.img = CabinsImages.Humpback
  }
}
class Bastion extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 118
    this.name = 'Бастион'
    this.type = 'Тяжелая кабина'
    this.ingredients = [Jawbreaker, APCWheelST, PU1Charge]
    this.img = CabinsImages.Bastion
  }
}


const CabinsEpicArray: EpicVehicleComponent[] = [
  new Jannabi(),
  new Harpy(),
  new Werewolf(),
  new Aggressor(),
  new Quantum(),
  new Photon(),
  new Humpback(),
  new Bastion()
]

export default CabinsEpicArray;