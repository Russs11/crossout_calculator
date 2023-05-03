import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Bat } from '../cabins/special'
import { LunarIV, ShivST, TwinWheel, TwinWheelST } from '../movement/special'
import { Prosecutor76mm, Buzzsaw, Goblin, Boom, Junkbow, Mace, AC50Storm, ZS33Hulk, AD13Hawk } from '../weapons/special'
import { Ampere, Chameleon, DunHorse, Genesis, Hardcore, KA1Discharger, Maxwell, OculusVI, PU1Charge, Razorback } from './special'

export class Tormentor extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Мучитель'
    this.type = ''
    this.ingredients = [new Bat(), new Junkbow(), new AD13Hawk()]
  }
}
export class ChameleonMk2 extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Хамелеон Mk2'
    this.type = ''
    this.ingredients = [new Maxwell(), new AC50Storm(), new Chameleon()]
  }
}
export class KA2Flywheel extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'КА-2 Маховик'
    this.type = ''
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new KA1Discharger(), new Razorback(), new OculusVI()]
  }
}
export class Doppler extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Доплер'
    this.type = ''
    this.ingredients = [new Maxwell(), new Chameleon()]
  }
}
export class RD2Keen extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'РЛС-2 Чуткий'
    this.type = ''
    this.ingredients = [new OculusVI(), new TwinWheel(), new PU1Charge()]
  }
}
export class Neutrino extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Нейтрино'
    this.type = ''
    this.ingredients = [new LunarIV(), new Genesis(), new TwinWheelST()]
  }
}
export class Gasgen extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Газген'
    this.type = ''
    this.ingredients = [new Buzzsaw(), new Goblin(), new Boom()]
  }
}
export class Oppressor extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гонитель'
    this.type = ''
    this.ingredients = [new Bat(), new ShivST(), new Hardcore()]
  }
}
export class HotRed extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Четкий'
    this.type = ''
    this.ingredients = [new Hardcore(), new Goblin(), new Mace()]
  }
}
export class Colossus extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Исполин'
    this.type = ''
    this.ingredients = [new Razorback(), new TwinWheel(), new ZS33Hulk()]
  }
}
export class Cheetah extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гепард'
    this.type = ''
    this.ingredients = [new DunHorse(), new Chameleon(), new AC50Storm()]
  }
}
export class Hermes extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гермес'
    this.type = ''
    this.ingredients = [new Hardcore(), new Boom(), new Buzzsaw()]
  }
}
export class RNSeal extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'РС Нерпа'
    this.type = ''
    this.ingredients = [new Maxwell(), new Ampere(), new DunHorse()]
  }
}
export class Shiver extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Озноб'
    this.type = ''
    this.ingredients = [new Buzzsaw(), new Mace(), new Hardcore()]
  }
}
export class ExpandedAmmoPack extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Боезапас увеличенный'
    this.type = ''
    this.ingredients = [new OculusVI(), new PU1Charge(), new Prosecutor76mm()]
  }
}