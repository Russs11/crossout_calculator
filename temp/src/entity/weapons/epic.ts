import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Pilgrim, Jawbreaker } from '../cabins/special'
import { Ampere, PU1Charge, Chameleon, DunHorse, Maxwell, Hardcore, Genesis, OculusVI, Razorback } from '../hardware/special'
import { LunarIVST, LunarIV, Shiv, APCWheel, TwinWheel, APCWheelST, TwinWheelST, ShivST } from '../movement/special'
import { Synthesis, Prosecutor76mm, T3Python, AC50Storm, Sinus0, ZS33Hulk, Mace, Goblin, Boom, Buzzsaw, Junkbow, Sidekick, AD13Hawk, M37Piercer, Tempura } from './special'

export class M29Protector extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'П-29 Заступник'
    this.type = 'Пулемет'
    this.ingredients = [new Sinus0(), new DunHorse(), new Chameleon()]
  }
}
export class M38Fidget extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'П-38 Егоза'
    this.type = 'Пулемет'
    this.scrapMetal = 600
    this.wires = 200
    this.copper = 600
    this.plastic = 100
    this.engravedCasings = 600
    this.ingredients = [new M37Piercer(), new AC50Storm(), new Razorback()]
  }
}
export class Spectre2 extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Спектр-2'
    this.type = 'Пулемет'
    this.ingredients = [new Sinus0(), new AD13Hawk(), new Maxwell()]
  }
}
export class MG13Equalizer extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ПУ13 Уравнитель'
    this.type = 'Пулемет'
    this.ingredients = [new AC50Storm(), new Sinus0(), new Ampere()]
  }
}
export class Caucasus extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Кавказ'
    this.type = 'Пулемет'
    this.ingredients = [new Prosecutor76mm(), new Jawbreaker(), new APCWheel()]
  }
}
export class Gremlin extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гремлин'
    this.type = 'Дробовик'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Goblin(), new Mace(), new Boom()]
  }
}
export class Fafnir extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Фафнир'
    this.type = 'Дробовик'
    this.ingredients = [new Junkbow(), new Junkbow(), new ZS33Hulk()]
  }
}
export class Thunderbolt extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гром'
    this.type = 'Дробовик'
    this.ingredients = [new Mace(), new Goblin(), new Buzzsaw()]
  }
}
export class Rupture extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Разрыватель'
    this.type = 'Дробовик'
    this.ingredients = [new Goblin(), new Hardcore(), new Buzzsaw()]
  }
}
export class AC72Whirlwind extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'АП72 Вихрь'
    this.type = 'Автопушка'
    this.ingredients = [new AC50Storm(), new Chameleon(), new Sinus0()]
  }
}
export class ZS34FatMan extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ЗИС-34 Толстяк'
    this.type = 'Пушка'
    this.ingredients = [new ZS33Hulk(), new ZS33Hulk(), new TwinWheelST() ]
  }
}
export class Executioner88mm extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Палач 88мм'
    this.type = 'Пушка'
    this.ingredients = [new Prosecutor76mm(), new TwinWheel(), new OculusVI()]
  }
}
export class Cricket extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Сверчок'
    this.type = 'Ракетница'
    this.ingredients = [new Goblin(), new Boom(), new Mace()]
  }
}
export class Pyre extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Пламя'
    this.type = 'Ракетница'
    this.ingredients = [new Prosecutor76mm(), new OculusVI(), new T3Python()]
  }
}
export class ClarinetTOW extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ПТУР Кларнет-С'
    this.type = 'Ракетница'
    this.ingredients = [new T3Python(), new Sidekick(), new APCWheelST()]
  }
}
export class Thresher extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Дробитель'
    this.type = 'Гранатомет'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new AC50Storm(), new DunHorse(), new Maxwell()]
  }
}
export class GL55Impulse extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'АГС-55 Импульс'
    this.type = 'Гранатомет'
    this.ingredients = [new Prosecutor76mm(), new T3Python(), new PU1Charge()]
  }
}
export class Aurora extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Аврора'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new Synthesis(), new LunarIVST(), new Ampere()]
  }
}
export class Quasar extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Квазар'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new ZS33Hulk(), new Synthesis(), new Genesis()]
  }
}
export class PrometheusV extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Прометей V'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new Synthesis(), new Genesis(), new Maxwell()]
  }
}
export class Phoenix extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Феникс'
    this.type = 'Арбалет'
    this.ingredients = [new Junkbow(), new Shiv(), new Boom()]
  }
}
export class Lancelot extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Ланселот'
    this.type = 'Контактное оружие'
    this.ingredients = [new Boom(), new Goblin(), new Hardcore()]
  }
}
export class Mauler extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Терзатель'
    this.type = 'Контактное оружие'
    this.ingredients = [new Buzzsaw(), new Boom(), new Goblin()]
  }
}
export class Incinerator extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Испепелитель'
    this.type = 'Огненое оружие'
    this.ingredients = [new Shiv(), new Junkbow(), new PU1Charge()]
  }
}
export class MD3Owl extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'РД-3 Филин'
    this.type = 'Дрон'
    this.ingredients = [new AD13Hawk(), new Ampere(), new Sinus0()]
  }
}

export class Fuze extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Запал'
    this.type = 'Дрон'
    this.ingredients = [new Hardcore(), new Boom(), new Goblin()]
  }
}
export class RTAnaconda extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ТР Анаконда'
    this.type = 'Дрон'
    this.ingredients = [new T3Python(), new PU1Charge(), new TwinWheelST()]
  }
}
export class BarrierIX extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Барьер IX'
    this.type = 'Дрон'
    this.ingredients = [new Pilgrim(), new LunarIV(), new T3Python()]
  }
}
export class Yaoguai extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Яогуай'
    this.type = 'Дрон'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Tempura(), new Sidekick(), new AD13Hawk()]
  }
}
export class Skinner extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Шкуродер'
    this.type = 'Оружие без категории'
    this.ingredients = [new Junkbow(), new ShivST(), new Mace()]
  }
}