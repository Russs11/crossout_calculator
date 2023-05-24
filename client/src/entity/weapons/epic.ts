import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Pilgrim, Jawbreaker } from '../cabins/special'
import { Ampere, PU1Charge, Chameleon, DunHorse, Maxwell, Hardcore, Genesis, OculusVI, Razorback } from '../hardware/special'
import { LunarIVST, LunarIV, Shiv, APCWheel, TwinWheel, APCWheelST, TwinWheelST, ShivST } from '../movement/special'
import { Synthesis, Prosecutor76mm, T3Python, AC50Storm, Sinus0, ZS33Hulk, Mace, Goblin, Boom, Buzzsaw, Junkbow, Sidekick, AD13Hawk, M37Piercer, Tempura } from './special'
import * as WeaponImages from "./WeaponImages";
export class M29Protector extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 230
    this.name = 'П-29 Заступник'
    this.type = 'Пулемет'
    this.ingredients = [new Sinus0(), new DunHorse(), new Chameleon()]
    this.img = WeaponImages.M29Protector
  }
}
export class M38Fidget extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 231
    this.name = 'П-38 Егоза'
    this.type = 'Пулемет'
    this.scrapMetal = 600
    this.wires = 200
    this.copper = 600
    this.plastic = 100
    this.engravedCasings = 600
    this.ingredients = [new M37Piercer(), new AC50Storm(), new Razorback()]
    this.img = WeaponImages.M38Fidget
  }
}
export class Spectre2 extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 232
    this.name = 'Спектр-2'
    this.type = 'Пулемет'
    this.ingredients = [new Sinus0(), new AD13Hawk(), new Maxwell()]
    this.img = WeaponImages.Spectre2
  }
}
export class MG13Equalizer extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 233
    this.name = 'ПУ13 Уравнитель'
    this.type = 'Пулемет'
    this.ingredients = [new AC50Storm(), new Sinus0(), new Ampere()]
    this.img = WeaponImages.MG13Equalizer
  }
}
export class Caucasus extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 234
    this.name = 'Кавказ'
    this.type = 'Пулемет'
    this.ingredients = [new Prosecutor76mm(), new Jawbreaker(), new APCWheel()]
    this.img = WeaponImages.Caucasus
  }
}
export class Gremlin extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 235
    this.name = 'Гремлин'
    this.type = 'Дробовик'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Goblin(), new Mace(), new Boom()]
    this.img = WeaponImages.Gremlin
  }
}
export class Fafnir extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 236
    this.name = 'Фафнир'
    this.type = 'Дробовик'
    this.ingredients = [new Junkbow(), new Junkbow(), new ZS33Hulk()]
    this.img = WeaponImages.Fafnir
  }
}
export class Thunderbolt extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 237
    this.name = 'Гром'
    this.type = 'Дробовик'
    this.ingredients = [new Mace(), new Goblin(), new Buzzsaw()]
    this.img = WeaponImages.Thunderbolt
  }
}
export class Rupture extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 238
    this.name = 'Разрыватель'
    this.type = 'Дробовик'
    this.ingredients = [new Goblin(), new Hardcore(), new Buzzsaw()]
    this.img = WeaponImages.Rupture
  }
}
export class AC72Whirlwind extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 239
    this.name = 'АП72 Вихрь'
    this.type = 'Автопушка'
    this.ingredients = [new AC50Storm(), new Chameleon(), new Sinus0()]
    this.img = WeaponImages.AC72Whirlwind
  }
}
export class ZS34FatMan extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 240
    this.name = 'ЗИС-34 Толстяк'
    this.type = 'Пушка'
    this.ingredients = [new ZS33Hulk(), new ZS33Hulk(), new TwinWheelST()]
    this.img = WeaponImages.ZS34FatMan
  }
}
export class Executioner88mm extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 241
    this.name = 'Палач 88мм'
    this.type = 'Пушка'
    this.ingredients = [new Prosecutor76mm(), new TwinWheel(), new OculusVI()]
    this.img = WeaponImages.Executioner88mm
  }
}
export class Cricket extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 242
    this.name = 'Сверчок'
    this.type = 'Ракетница'
    this.ingredients = [new Goblin(), new Boom(), new Mace()]
    this.img = WeaponImages.Cricket
  }
}
export class Pyre extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 243
    this.name = 'Пламя'
    this.type = 'Ракетница'
    this.ingredients = [new Prosecutor76mm(), new OculusVI(), new T3Python()]
    this.img = WeaponImages.Pyre
  }
}
export class ClarinetTOW extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 244
    this.name = 'ПТУР Кларнет-С'
    this.type = 'Ракетница'
    this.ingredients = [new T3Python(), new Sidekick(), new APCWheelST()]
    this.img = WeaponImages.ClarinetTOW
  }
}
export class Thresher extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 245
    this.name = 'Дробитель'
    this.type = 'Гранатомет'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new AC50Storm(), new DunHorse(), new Maxwell()]
    this.img = WeaponImages.Thresher
  }
}
export class GL55Impulse extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 246
    this.name = 'АГС-55 Импульс'
    this.type = 'Гранатомет'
    this.ingredients = [new Prosecutor76mm(), new T3Python(), new PU1Charge()]
    this.img = WeaponImages.GL55Impulse
  }
}
export class Aurora extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 247
    this.name = 'Аврора'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new Synthesis(), new LunarIVST(), new Ampere()]
    this.img = WeaponImages.Aurora
  }
}
export class Quasar extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 248
    this.name = 'Квазар'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new ZS33Hulk(), new Synthesis(), new Genesis()]
    this.img = WeaponImages.Quasar
  }
}
export class PrometheusV extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 249
    this.name = 'Прометей V'
    this.type = 'Энергетическое оружие'
    this.ingredients = [new Synthesis(), new Genesis(), new Maxwell()]
    this.img = WeaponImages.PrometheusV
  }
}
export class Phoenix extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 250
    this.name = 'Феникс'
    this.type = 'Арбалет'
    this.ingredients = [new Junkbow(), new Shiv(), new Boom()]
    this.img = WeaponImages.Phoenix
  }
}
export class Lancelot extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 251
    this.name = 'Ланселот'
    this.type = 'Контактное оружие'
    this.ingredients = [new Boom(), new Goblin(), new Hardcore()]
    this.img = WeaponImages.Lancelot
  }
}
export class Mauler extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 252
    this.name = 'Терзатель'
    this.type = 'Контактное оружие'
    this.ingredients = [new Buzzsaw(), new Boom(), new Goblin()]
    this.img = WeaponImages.Mauler
  }
}
export class Incinerator extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 253
    this.name = 'Испепелитель'
    this.type = 'Огненое оружие'
    this.ingredients = [new Shiv(), new Junkbow(), new PU1Charge()]
    this.img = WeaponImages.Incinerator
  }
}
export class MD3Owl extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 254
    this.name = 'РД-3 Филин'
    this.type = 'Дрон'
    this.ingredients = [new AD13Hawk(), new Ampere(), new Sinus0()]
    this.img = WeaponImages.MD3Owl
  }
}

export class Fuze extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 255
    this.name = 'Запал'
    this.type = 'Дрон'
    this.ingredients = [new Hardcore(), new Boom(), new Goblin()]
    this.img = WeaponImages.Fuze
  }
}
export class RTAnaconda extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 256
    this.name = 'ТР Анаконда'
    this.type = 'Дрон'
    this.ingredients = [new T3Python(), new PU1Charge(), new TwinWheelST()]
    this.img = WeaponImages.RTAnaconda
  }
}
export class BarrierIX extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 257
    this.name = 'Барьер IX'
    this.type = 'Дрон'
    this.ingredients = [new Pilgrim(), new LunarIV(), new T3Python()]
    this.img = WeaponImages.BarrierIX
  }
}
export class Yaoguai extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 258
    this.name = 'Яогуай'
    this.type = 'Дрон'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Tempura(), new Sidekick(), new AD13Hawk()]
    this.img = WeaponImages.Yaoguai
  }
}
export class Skinner extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 259
    this.name = 'Шкуродер'
    this.type = 'Оружие без категории'
    this.ingredients = [new Junkbow(), new ShivST(), new Mace()]
    this.img = WeaponImages.Skinner
  }
}