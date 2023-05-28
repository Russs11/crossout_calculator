import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Trucker, Growl, Wyvern } from './rare'
import { RD1Listener, BigG } from '../hardware/rare'
import { AD12Falcon } from '../weapons/rare'
import * as CabinsImages from './CabinsImages'
export class Bat extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 108
    this.name = 'Нетопырь'
    this.type = 'Легкая кабина'
    this.ingredients = [new Growl(), new BigG()]
    this.img = CabinsImages.Bat
  }
}
export class Pilgrim extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 109
    this.name = 'Пилигрим'
    this.type = 'Средняя кабина'
    this.ingredients = [new Wyvern(), new AD12Falcon()]
    this.img = CabinsImages.Pilgrim
  }
}
export class Jawbreaker extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 110
    this.name = 'Зубодробитель'
    this.type = 'Тяжелая кабина'
    this.ingredients = [new Trucker(), new RD1Listener()]
    this.img = CabinsImages.Jawbreaker
  }
}