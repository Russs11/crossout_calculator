import { ICarComponent } from '../../interfaces/carComponent.interface'

export class Aurora implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Synthesis(), new Lunar IV ST(), new Ampere()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class GL-55 Impulse implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor 76mm(), new T4 Python(), new PU - 1 Charge()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class AC72 Whirlwind implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AC50 Storm(), new Chameleon(), new Sinus - 0()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Argument implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new Summator()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Barrier IX implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new Lunar IV(), new T4 Python()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Blockchain implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 1
  ingredients = [new Plastic x100(), new Summator(), new Mace()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Nest implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new ZS - 33 Hulk(), new PU - 1 Charge()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Gravastar implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Synthesis(), new Lunar IV()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Gremlin implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new Goblin()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Thunderbolt implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Mace(), new Goblin(), new Buzzsaw()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Gungnir implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 450
  wires = 450
  copper = 200
  plastic = 1
  ingredients = [new Plastic x100(), new AC62 Therm(), new Sinus - 0()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Thresher implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new AC50 Storm()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Fuze implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Hardcore(), new Boom(), new Goblin()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class ZS-34 Fat Man implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 1
  ingredients = [new Twin wheel ST(), new ZS - 33 Hulk(), new Plastic x100()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Incinerator implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Shiv(), new Junkbow()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Caucasus implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Prosecutor 76mm(), new Jawbreaker(), new APC wheel()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Quasar implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new ZS - 33 Hulk(), new Synthesis(), new Genesis()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Lancelot implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Boom(), new Goblin(), new Hardcore()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Miller implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 100
  plastic = 1
  ingredients = [new Batteries x100(), new Sinus - 0(), new Tempest()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class M-29 Protector implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Sinus - 0(), new Dun horse()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class M-38 Fidget implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 600
  wires = 200
  copper = 600
  plastic = 1
  ingredients = [new Plastic x100(), new Engraved casings x100(), new M - 37 Piercer()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Executioner 88mm implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor 76mm(), new Twin wheel(), new Oculus VI()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Pyre implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor 76mm(), new Oculus VI(), new T4 Python()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Prometheus V implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Synthesis(), new Genesis()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Enlightenment implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new Tempura()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Clarinet TOW implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new T4 Python(), new Sidekick(), new APC wheel ST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class MG13 Equalizer implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AC50 Storm(), new Sinus - 0(), new Ampere()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Rupture implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 1
  ingredients = [new Plastic x100(), new Goblin(), new Hardcore()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class MD-3 Owl implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AD - 13 Hawk(), new Ampere(), new Sinus - 0()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Cricket implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Goblin(), new Boom(), new Mace()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Spectre-2 implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Sinus - 0(), new AD - 13 Hawk(), new Maxwell()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Mauler implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Buzzsaw(), new Boom(), new Goblin()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class RT Anaconda implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new T4 Python(), new PU - 1 Charge(), new Twin wheel ST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Trigger implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 2
  ingredients = [new Plastic x100(), new Summator(), new Oculus VI()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Trombone implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new Sidekick()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Fafnir implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Junkbow(), new ZS - 33 Hulk()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Phoenix implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Junkbow(), new Shiv(), new Boom()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Whirl implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new AC50 Storm(), new APC wheel()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Skinner implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Plastic x100(), new Junkbow(), new Shiv ST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Yaoguai implements ICarComponent {
  name = ''
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 250
  copper = 200
  plastic = 1
  ingredients = [new Batteries x100(), new Plastic x100(), new Tempura()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}

