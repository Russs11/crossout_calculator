import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Growl, Wyvern } from '../cabins/rare'
import { AmmoPack, BigG, Blastoff, CSTaymyr, FuelTank, R2Chill, RD1Listener } from '../hardware/rare'
import { AC43Rapier, AD12Falcon, Borer, DTCobra, Judge76mm, LittleBoy6LB, Sledgehammer, Spitfire, STM23Defender, Vector, Wasp } from './rare'

export class M37Piercer extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'П-37 Шило'
    this.type = 'Пулемет'
    this.scrapMetal = 250
    this.engravedCasings = 450
    this.ingredients = [new Vector(), new BigG()]
  }
}
export class Sinus0 extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Синус-0'
    this.type = 'Пулемет'
    this.ingredients = [new Vector(), new AC43Rapier()]
  }
}
export class Goblin extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Гоблин'
    this.type = 'Дробовик'
    this.ingredients = [new Wasp(), new Spitfire()]
  }
}
export class Junkbow extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Самопал'
    this.type = 'Дробовик'
    this.ingredients = [new Sledgehammer(), new Growl()]
  }
}
export class Mace extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Булава'
    this.type = 'Дробовик'
    this.ingredients = [new Sledgehammer(), new Spitfire()]
  }
}
export class AC50Storm extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'АП50 Шторм'
    this.type = 'Автопушка'
    this.ingredients = [new STM23Defender(), new AC43Rapier()]
  }
}
export class ZS33Hulk extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'ЗИС-33 Верзила'
    this.type = 'Пушка'
    this.ingredients = [new Judge76mm(), new FuelTank()]
  }
}
export class Prosecutor76mm extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Обвинитель 76мм'
    this.type = 'Пушка'
    this.ingredients = [new Judge76mm(), new AmmoPack()]
  }
}
export class Synthesis extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Синтез'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new Vector(), new Wyvern()]
  }
}
export class Boom extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Бум'
    this.type = 'Контактное оружие'
    this.ingredients = [new Wasp(), new FuelTank()]
  }
}
export class Tempura extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Темпура'
    this.type = 'Контактное оружие'
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new Borer(), new RD1Listener()]
  }
}
export class Buzzsaw extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Циркулярка'
    this.type = 'Контактное оружие'
    this.ingredients = [new Blastoff(), new LittleBoy6LB()]
  }
}
export class AD13Hawk extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'АД-13 Ястреб'
    this.type = 'Дрон'
    this.ingredients = [new AD12Falcon(), new CSTaymyr()]
  }
}
export class Sidekick extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Прихвостень'
    this.type = 'Дрон'
    this.ingredients = [new DTCobra(), new Borer()]
  }
}
export class T3Python extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'ТЗ Питон'
    this.type = 'Дрон'
    this.ingredients = [new DTCobra(), new R2Chill()]
  }
}