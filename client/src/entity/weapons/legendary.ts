import { Gasgen } from '../hardware/epic'
import { LegendaryVehicleComponent } from '../legendaryVehicleComponent'
import { MG13Equalizer, RTAnaconda } from './epic'

export class MG14Arbiter extends LegendaryVehicleComponent {
  constructor() {
    super()
    this.name = 'ПУ14 Арбитр'
    this.type = 'Пулемет'
    this.scrapMetal = 100
    this.electronics = 750
    this.copper = 750
    this.batteries = 750
    this.ingredients = [new MG13Equalizer(), new MG13Equalizer(), new Gasgen(), new RTAnaconda(), new RTAnaconda()]
  }
}