import { EpicVehicleComponent } from "../epicVehicleComponent";
import * as WeaponImages from "./WeaponImages";
import { SpecialVehicleComponent } from "../specialVehicleComponent";
import CabinsSpecialArray from "../cabins/special";
import HardwareSpecialArray from "../hardware/special";
import WeaponSpecialArray from "../weapons/special";
import MovementSpecialArray from "./special";


let [Bat, Pilgrim, Jawbreaker]: SpecialVehicleComponent[] = CabinsSpecialArray;

let [
  Chameleon,
  KA1Discharger,
  OculusVI,
  Maxwell,
  PU1Charge,
  Ampere,
  Hardcore,
  Razorback,
  DunHorse,
  Genesis,
]: SpecialVehicleComponent[] = HardwareSpecialArray;

let [
  M37Piercer,
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
  T3Python,
]: SpecialVehicleComponent[] = WeaponSpecialArray;

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
class M29Protector extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 230;
    this.name = "П-29 Заступник";
    this.type = "Пулемет";
    this.ingredients = [ Sinus0,  DunHorse,  Chameleon];
    this.img = WeaponImages.M29Protector;
  }
}
class M38Fidget extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 231;
    this.name = "П-38 Егоза";
    this.type = "Пулемет";
    this.scrapMetal = 600;
    this.wires = 200;
    this.copper = 600;
    this.plastic = 100;
    this.engravedCasings = 600;
    this.ingredients = [ M37Piercer,  AC50Storm,  Razorback];
    this.img = WeaponImages.M38Fidget;
  }
}
class Spectre2 extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 232;
    this.name = "Спектр-2";
    this.type = "Пулемет";
    this.ingredients = [ Sinus0,  AD13Hawk,  Maxwell];
    this.img = WeaponImages.Spectre2;
  }
}
class MG13Equalizer extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 233;
    this.name = "ПУ13 Уравнитель";
    this.type = "Пулемет";
    this.ingredients = [ AC50Storm,  Sinus0,  Ampere];
    this.img = WeaponImages.MG13Equalizer;
  }
}
class Caucasus extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 234;
    this.name = "Кавказ";
    this.type = "Пулемет";
    this.ingredients = [ Prosecutor76mm,  Jawbreaker,  APCWheel];
    this.img = WeaponImages.Caucasus;
  }
}
class Gremlin extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 235;
    this.name = "Гремлин";
    this.type = "Дробовик";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ Goblin,  Mace,  Boom];
    this.img = WeaponImages.Gremlin;
  }
}
class Fafnir extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 236;
    this.name = "Фафнир";
    this.type = "Дробовик";
    this.ingredients = [ Junkbow,  Junkbow,  ZS33Hulk];
    this.img = WeaponImages.Fafnir;
  }
}
class Thunderbolt extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 237;
    this.name = "Гром";
    this.type = "Дробовик";
    this.ingredients = [ Mace,  Goblin,  Buzzsaw];
    this.img = WeaponImages.Thunderbolt;
  }
}
class Rupture extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 238;
    this.name = "Разрыватель";
    this.type = "Дробовик";
    this.ingredients = [ Goblin,  Hardcore,  Buzzsaw];
    this.img = WeaponImages.Rupture;
  }
}
class AC72Whirlwind extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 239;
    this.name = "АП72 Вихрь";
    this.type = "Автопушка";
    this.ingredients = [ AC50Storm,  Chameleon,  Sinus0];
    this.img = WeaponImages.AC72Whirlwind;
  }
}
class ZS34FatMan extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 240;
    this.name = "ЗИС-34 Толстяк";
    this.type = "Пушка";
    this.ingredients = [ ZS33Hulk,  ZS33Hulk,  TwinWheelST];
    this.img = WeaponImages.ZS34FatMan;
  }
}
class Executioner88mm extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 241;
    this.name = "Палач 88мм";
    this.type = "Пушка";
    this.ingredients = [ Prosecutor76mm,  TwinWheel,  OculusVI];
    this.img = WeaponImages.Executioner88mm;
  }
}
class Cricket extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 242;
    this.name = "Сверчок";
    this.type = "Ракетница";
    this.ingredients = [ Goblin,  Boom,  Mace];
    this.img = WeaponImages.Cricket;
  }
}
class Pyre extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 243;
    this.name = "Пламя";
    this.type = "Ракетница";
    this.ingredients = [ Prosecutor76mm,  OculusVI,  T3Python];
    this.img = WeaponImages.Pyre;
  }
}
class ClarinetTOW extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 244;
    this.name = "ПТУР Кларнет-С";
    this.type = "Ракетница";
    this.ingredients = [ T3Python,  Sidekick,  APCWheelST];
    this.img = WeaponImages.ClarinetTOW;
  }
}
class Thresher extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 245;
    this.name = "Дробитель";
    this.type = "Гранатомет";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ AC50Storm,  DunHorse,  Maxwell];
    this.img = WeaponImages.Thresher;
  }
}
class GL55Impulse extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 246;
    this.name = "АГС-55 Импульс";
    this.type = "Гранатомет";
    this.ingredients = [ Prosecutor76mm,  T3Python,  PU1Charge];
    this.img = WeaponImages.GL55Impulse;
  }
}
class Aurora extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 247;
    this.name = "Аврора";
    this.type = "Энергетическое оружие";
    this.ingredients = [ Synthesis,  LunarIVST,  Ampere];
    this.img = WeaponImages.Aurora;
  }
}
class Quasar extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 248;
    this.name = "Квазар";
    this.type = "Энергетическое оружие";
    this.ingredients = [ ZS33Hulk,  Synthesis,  Genesis];
    this.img = WeaponImages.Quasar;
  }
}
class PrometheusV extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 249;
    this.name = "Прометей V";
    this.type = "Энергетическое оружие";
    this.ingredients = [ Synthesis,  Genesis,  Maxwell];
    this.img = WeaponImages.PrometheusV;
  }
}
class Phoenix extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 250;
    this.name = "Феникс";
    this.type = "Арбалет";
    this.ingredients = [ Junkbow,  Shiv,  Boom];
    this.img = WeaponImages.Phoenix;
  }
}
class Lancelot extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 251;
    this.name = "Ланселот";
    this.type = "Контактное оружие";
    this.ingredients = [ Boom,  Goblin,  Hardcore];
    this.img = WeaponImages.Lancelot;
  }
}
class Mauler extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 252;
    this.name = "Терзатель";
    this.type = "Контактное оружие";
    this.ingredients = [ Buzzsaw,  Boom,  Goblin];
    this.img = WeaponImages.Mauler;
  }
}
class Incinerator extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 253;
    this.name = "Испепелитель";
    this.type = "Огненое оружие";
    this.ingredients = [ Shiv,  Junkbow,  PU1Charge];
    this.img = WeaponImages.Incinerator;
  }
}
class MD3Owl extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 254;
    this.name = "РД-3 Филин";
    this.type = "Дрон";
    this.ingredients = [ AD13Hawk,  Ampere,  Sinus0];
    this.img = WeaponImages.MD3Owl;
  }
}

class Fuze extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 255;
    this.name = "Запал";
    this.type = "Дрон";
    this.ingredients = [ Hardcore,  Boom,  Goblin];
    this.img = WeaponImages.Fuze;
  }
}
class RTAnaconda extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 256;
    this.name = "ТР Анаконда";
    this.type = "Дрон";
    this.ingredients = [ T3Python,  PU1Charge,  TwinWheelST];
    this.img = WeaponImages.RTAnaconda;
  }
}
class BarrierIX extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 257;
    this.name = "Барьер IX";
    this.type = "Дрон";
    this.ingredients = [ Pilgrim,  LunarIV,  T3Python];
    this.img = WeaponImages.BarrierIX;
  }
}
class Yaoguai extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 258;
    this.name = "Яогуай";
    this.type = "Дрон";
    this.scrapMetal = 250;
    this.wires = 200;
    this.copper = 250;
    this.plastic = 60;
    this.batteries = 100;
    this.ingredients = [ Tempura,  Sidekick,  AD13Hawk];
    this.img = WeaponImages.Yaoguai;
  }
}
class Skinner extends EpicVehicleComponent {
  constructor() {
    super();
    this.id = 259;
    this.name = "Шкуродер";
    this.type = "Оружие без категории";
    this.ingredients = [ Junkbow,  ShivST,  Mace];
    this.img = WeaponImages.Skinner;
  }
}


const WeaponsEpicArray: EpicVehicleComponent[] = [
  new M29Protector(),
  new M38Fidget(),
  new Spectre2(),
  new MG13Equalizer(),
  new Caucasus(),
  new Gremlin(),
  new Fafnir(),
  new Thunderbolt(),
  new Rupture(),
  new AC72Whirlwind(),
  new ZS34FatMan(),
  new Executioner88mm(),
  new Cricket(),
  new Pyre(),
  new ClarinetTOW(),
  new Thresher(),
  new GL55Impulse(),
  new Aurora(),
  new Quasar(),
  new PrometheusV(),
  new Phoenix(),
  new Lancelot(),
  new Mauler(),
  new Incinerator(),
  new MD3Owl(),
  new Fuze(),
  new RTAnaconda(),
  new BarrierIX(),
  new Yaoguai(),
  new Skinner(),
];

export default WeaponsEpicArray;