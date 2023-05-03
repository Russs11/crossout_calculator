import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Trucker, Growl, Wyvern } from './rare'
import { RD1Listener, BigG } from '../hardware/rare'
import { AD12Falcon } from '../weapons/rare'

export class Bat extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Нетопырь'
    this.type = 'Легкая кабина'
    this.ingredients = [new Growl(), new BigG()]
  }
}
export class Pilgrim extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Пилигрим'
    this.type = 'Средняя кабина'
    this.ingredients = [new Wyvern(), new AD12Falcon()]
  }
}
export class Jawbreaker extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Зубодробитель'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Trucker(), new RD1Listener()]
  }
}