import { CommonVehicleComponent } from "../commonVehicleComponent";

export class P54MAccord extends CommonVehicleComponent {
  constructor() {
    super();
    this.id = 1;
    this.name = "П-54М Аккорд";
    this.type = "Пулемет";
    this.scrapMetal = 30;
    this.copper = 6;
  }
}
export class Lupara extends CommonVehicleComponent {
  constructor() {
    super();
    this.id = 2;
    this.name = "Обрез";
    this.type = "Дробовик";
    this.scrapMetal = 30;
    this.copper = 6;
  }
}
export class Avenger57mm extends CommonVehicleComponent {
  constructor() {
    super();
    this.id = 3;
    this.name = "Мститель 57мм";
    this.type = "Пушка";
    this.scrapMetal = 30;
    this.copper = 6;
  }
}
