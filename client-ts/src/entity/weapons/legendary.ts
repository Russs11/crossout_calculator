import { EpicVehicleComponent } from '../epicVehicleComponent';
import HardwareEpicArray from '../hardware/epic'
import { LegendaryVehicleComponent } from '../legendaryVehicleComponent'
import WeaponsEpicArray from './epic'

const MG13Equalizer: EpicVehicleComponent = WeaponsEpicArray[3];

const RTAnaconda: EpicVehicleComponent = WeaponsEpicArray[26];

const Gasgen: EpicVehicleComponent = HardwareEpicArray[6];

export class MG14Arbiter extends LegendaryVehicleComponent {
  constructor() {
    super()
    this.name = 'ПУ14 Арбитр'
    this.type = 'Пулемет'
    this.scrapMetal = 100
    this.electronics = 750
    this.copper = 750
    this.batteries = 750
    this.ingredients = [ MG13Equalizer,  MG13Equalizer,  Gasgen,  RTAnaconda,  RTAnaconda]
  }
}