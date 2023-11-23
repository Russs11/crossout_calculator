import WeaponsCommonArray from "../entity/weapons/common";
import WeaponsRareArray from "../entity/weapons/rare"
import WeaponsSpecialArray from "../entity/weapons/special"
import WeaponsEpicArray from "../entity/weapons/epic"
import CabinsCommonArray from "../entity/cabins/common"
import CabinsRareArray from "../entity/cabins/rare"
import CabinsSpecialArray from "../entity/cabins/special"
import CabinsEpicArray from "../entity/cabins/epic"
import HardwareCommonArray from "../entity/hardware/common"
import HardwareRareArray from "../entity/hardware/rare"
import HardwareSpecialArray from "../entity/hardware/special"
import HardwareEpicArray from "../entity/hardware/epic"
import MovementCommonArray from "../entity/movement/common"
import MovementRareArray from "../entity/movement/rare"
import MovementSpecialArray from "../entity/movement/special"
import MovementEpicArray from "../entity/movement/epic"

import { ICommonVehicleComponent, IComponent, IComponentCostPropDto, IComponentIngridientObject, IEpicVehicleComponent, IProductionCostPropDto, IProfitPropDto, IRareVehicleComponent, IResourcePrices, IResourcesFromInput, ISpecialVehicleComponent } from "../interfaces/Interfaces";

export function instancesToArr(): IComponent[] {

	let entityArr: IComponent[] = []

	for (const item of WeaponsCommonArray) {
		entityArr.push(item)
	}
	for (const item of WeaponsRareArray) {
		entityArr.push(item)
	}
	for (const item of WeaponsSpecialArray) {
		entityArr.push(item)
	}
	for (const item of WeaponsEpicArray) {
		entityArr.push(item)
	}

	for (const item of CabinsCommonArray) {
		entityArr.push(item)
	}
	for (const item of CabinsRareArray) {
		entityArr.push(item)
	}
	for (const item of CabinsSpecialArray) {
		entityArr.push(item)
	}
	for (const item of CabinsEpicArray) {
		entityArr.push(item)
	}

	for (const item of HardwareCommonArray) {
		entityArr.push(item)
	}
	for (const item of HardwareRareArray) {
		entityArr.push(item)
	}
	for (const item of HardwareSpecialArray) {
		entityArr.push(item)
	}
	for (const item of HardwareEpicArray) {
		entityArr.push(item)
	}

	for (const item of MovementCommonArray) {
		entityArr.push(item)
	}
	for (const item of MovementRareArray) {
		entityArr.push(item)
	}
	for (const item of MovementSpecialArray) {
		entityArr.push(item)
	}
	for (const item of MovementEpicArray) {
		entityArr.push(item)
	}
	return entityArr
}

export function componentCostDto(ingridientsArr: ICommonVehicleComponent[] | IRareVehicleComponent[] | ISpecialVehicleComponent[] | IEpicVehicleComponent[] | undefined): IComponentCostPropDto {


	const componentCostPropDto: IComponentCostPropDto = {
		ingridients: [],
		totalIngridientsCost: 0
	}
	const componentObjArr: IComponentIngridientObject[] = []
	const idArr: number[] = []
	if (ingridientsArr) {
		ingridientsArr.forEach((item: ICommonVehicleComponent | IRareVehicleComponent | ISpecialVehicleComponent | IEpicVehicleComponent) => {
			const obj: IComponentIngridientObject = {
				id: 0,
				img: '',
				count: 1,
				sellPrice: 0,
				cost: 0,
			}

			if (!componentObjArr.length) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				obj.id = item.id
				obj.img = item.img
				obj.sellPrice = item.sellPrice
				componentObjArr.push(obj)
				idArr.push(item.id)
			}
			else {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				obj.id = item.id
				obj.img = item.img
				obj.sellPrice = item.sellPrice
				for (let i = 0; i < idArr.length; i++) {
					if (obj.id === idArr[i]) {
						componentObjArr.forEach((item) => {
							if (obj.id === item.id) {
								item.count++
							}
						})
					} else {
						componentObjArr.push(obj)
						idArr.push(obj.id)
						break;
					}
				}
			}
			obj.cost = obj.count * obj.sellPrice
		})
	}
	componentCostPropDto.ingridients = componentObjArr

	componentCostPropDto.ingridients.forEach(item => {
		componentCostPropDto.totalIngridientsCost += item.cost
	})
	componentCostPropDto.totalIngridientsCost = Math.round(componentCostPropDto.totalIngridientsCost)
	return componentCostPropDto
}

export function productionCostDto(component: IComponent, resourcePrices: IResourcePrices[], resoursesFromInput: IResourcesFromInput): IProductionCostPropDto {

	const productionCostPropDto: IProductionCostPropDto = {

		benchCost: component.getAllBenchCost?.() ? component.getAllBenchCost?.() : 0,
		scrapMetalRequires: component.getScrapMetal?.(),
		copperRequires: component.getCopper?.(),
		wiresRequires: component.getWires?.(),
		plasticRequires: component.getPlastic?.(),
		batteriesRequires: component.getBatteries?.(),
		electronicsRequires: component.getElectronics?.(),
		engravedCasingsRequires: component.getEngravedCasings?.(),

		allScrapMetalRequires: component.getAllScrapMetal?.(),
		allCopperRequires: component.getAllCopper?.(),
		allWiresRequires: component.getAllWires?.(),
		allPlasticRequires: component.getAllPlastic?.(),
		allBatterriesRequires: component.getAllBatteries?.(),
		allElectronicsRequires: component.getAllElectronics?.(),
		allEngravedCasingsRequires: component.getAllEngravedCasings?.(),

		scrapMetalSellPrice: resourcePrices[0].sellPrice,
		copperSellPrice: resourcePrices[1].sellPrice,
		wiresSellPrice: resourcePrices[2].sellPrice,
		plasticSellPrice: resourcePrices[3].sellPrice,
		batteriesSellPrice: resourcePrices[4].sellPrice,
		electronicsSellPrice: resourcePrices[5].sellPrice,
		engravedCasingsSellPrice: resourcePrices[6].sellPrice,

		allScrapMetalCost: 0,
		allCopperCost: 0,
		allWiresCost: 0,
		allPlasticCost: 0,
		allEngravedCasingsCost: 0,
		allBatteriesCost: 0,
		allElectronicsCost: 0,

		scrapMetalCost: 0,
		copperCost: 0,
		wiresCost: 0,
		plasticCost: 0,
		engravedCasingsCost: 0,
		batteriesCost: 0,
		electronicsCost: 0,

		totalAllResoursesСost: 0,
		totalResoursesCost: 0

	}

	if (resoursesFromInput.scrapMetal > 0) {
		if (!productionCostPropDto.allScrapMetalRequires || !productionCostPropDto.scrapMetalRequires) {
			productionCostPropDto.allScrapMetalRequires = 0
			productionCostPropDto.scrapMetalRequires = 0
		}
		productionCostPropDto.allScrapMetalRequires -= resoursesFromInput.scrapMetal
		productionCostPropDto.scrapMetalRequires -= resoursesFromInput.scrapMetal
		if (productionCostPropDto.allScrapMetalRequires < 0) {
			productionCostPropDto.allScrapMetalRequires = 0
		}
		if (productionCostPropDto.scrapMetalRequires < 0) {
			productionCostPropDto.scrapMetalRequires = 0
		}
	}

	if (resoursesFromInput.electronics > 0) {
		if (!productionCostPropDto.allElectronicsRequires || !productionCostPropDto.electronicsRequires) {
			productionCostPropDto.allElectronicsRequires = 0
			productionCostPropDto.electronicsRequires = 0
		}
		productionCostPropDto.allElectronicsRequires -= resoursesFromInput.electronics
		productionCostPropDto.electronicsRequires -= resoursesFromInput.electronics
		if (productionCostPropDto.allElectronicsRequires < 0) {
			productionCostPropDto.allElectronicsRequires = 0
		}
		if (productionCostPropDto.electronicsRequires < 0) {
			productionCostPropDto.electronicsRequires = 0
		}
	}

	if (resoursesFromInput.copper > 0) {
		if (!productionCostPropDto.allCopperRequires || !productionCostPropDto.copperRequires) {
			productionCostPropDto.allCopperRequires = 0
			productionCostPropDto.copperRequires = 0
		}
		productionCostPropDto.allCopperRequires -= resoursesFromInput.copper
		productionCostPropDto.copperRequires -= resoursesFromInput.copper
		if (productionCostPropDto.allCopperRequires < 0) {
			productionCostPropDto.allCopperRequires = 0
		}
		if (productionCostPropDto.copperRequires < 0) {
			productionCostPropDto.copperRequires = 0
		}
	}

	if (resoursesFromInput.wires > 0) {
		if (!productionCostPropDto.allWiresRequires || !productionCostPropDto.wiresRequires) {
			productionCostPropDto.allWiresRequires = 0
			productionCostPropDto.wiresRequires = 0
		}
		productionCostPropDto.allWiresRequires -= resoursesFromInput.wires
		productionCostPropDto.wiresRequires -= resoursesFromInput.wires
		if (productionCostPropDto.allWiresRequires < 0) {
			productionCostPropDto.allWiresRequires = 0
		}
		if (productionCostPropDto.wiresRequires < 0) {
			productionCostPropDto.wiresRequires = 0
		}
	}

	if (resoursesFromInput.plastic > 0) {
		if (!productionCostPropDto.allPlasticRequires || !productionCostPropDto.plasticRequires) {
			productionCostPropDto.allPlasticRequires = 0
			productionCostPropDto.plasticRequires = 0
		}
		productionCostPropDto.allPlasticRequires -= resoursesFromInput.plastic
		productionCostPropDto.plasticRequires -= resoursesFromInput.plastic
		if (productionCostPropDto.allPlasticRequires < 0) {
			productionCostPropDto.allPlasticRequires = 0
		}
		if (productionCostPropDto.plasticRequires < 0) {
			productionCostPropDto.plasticRequires = 0
		}
	}

	if (resoursesFromInput.batteries > 0) {
		if (!productionCostPropDto.allBatterriesRequires || !productionCostPropDto.batteriesRequires) {
			productionCostPropDto.allBatterriesRequires = 0
			productionCostPropDto.batteriesRequires = 0
		}
		productionCostPropDto.allBatterriesRequires -= resoursesFromInput.batteries
		productionCostPropDto.batteriesRequires -= resoursesFromInput.batteries
		if (productionCostPropDto.allBatterriesRequires < 0) {
			productionCostPropDto.allBatterriesRequires = 0
		}
		if (productionCostPropDto.batteriesRequires < 0) {
			productionCostPropDto.batteriesRequires = 0
		}
	}

	if (resoursesFromInput.engravedCasings > 0) {
		if (!productionCostPropDto.allEngravedCasingsRequires || !productionCostPropDto.engravedCasingsRequires) {
			productionCostPropDto.allEngravedCasingsRequires = 0
			productionCostPropDto.engravedCasingsRequires = 0
		}
		productionCostPropDto.allEngravedCasingsRequires -= resoursesFromInput.engravedCasings
		productionCostPropDto.engravedCasingsRequires -= resoursesFromInput.engravedCasings
		if (productionCostPropDto.allEngravedCasingsRequires < 0) {
			productionCostPropDto.allEngravedCasingsRequires = 0
		}
		if (productionCostPropDto.engravedCasingsRequires < 0) {
			productionCostPropDto.engravedCasingsRequires = 0
		}
	}

	productionCostPropDto.allScrapMetalCost = productionCostPropDto.allScrapMetalRequires ? Math.round((productionCostPropDto.allScrapMetalRequires * productionCostPropDto.scrapMetalSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allCopperCost = productionCostPropDto.allCopperRequires ? Math.round((productionCostPropDto.allCopperRequires * productionCostPropDto.copperSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allWiresCost = productionCostPropDto.allWiresRequires ? Math.round((productionCostPropDto.allWiresRequires * productionCostPropDto.wiresSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allPlasticCost = productionCostPropDto.allPlasticRequires ? Math.round((productionCostPropDto.allPlasticRequires * productionCostPropDto.plasticSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allEngravedCasingsCost = productionCostPropDto.allEngravedCasingsRequires ? Math.round((productionCostPropDto.allEngravedCasingsRequires * productionCostPropDto.engravedCasingsSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allBatteriesCost = productionCostPropDto.allBatterriesRequires ? Math.round((productionCostPropDto.allBatterriesRequires * productionCostPropDto.batteriesSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.allElectronicsCost = productionCostPropDto.allElectronicsRequires ? Math.round((productionCostPropDto.allElectronicsRequires * productionCostPropDto.electronicsSellPrice) * 100) / 100 : 0

	productionCostPropDto.scrapMetalCost = productionCostPropDto.scrapMetalRequires ? Math.round((productionCostPropDto.scrapMetalRequires * productionCostPropDto.scrapMetalSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.copperCost = productionCostPropDto.copperRequires ? Math.round((productionCostPropDto.copperRequires * productionCostPropDto.copperSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.wiresCost = productionCostPropDto.wiresRequires ? Math.round((productionCostPropDto.wiresRequires * productionCostPropDto.wiresSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.plasticCost = productionCostPropDto.plasticRequires ? Math.round((productionCostPropDto.plasticRequires * productionCostPropDto.plasticSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.engravedCasingsCost = productionCostPropDto.engravedCasingsRequires ? Math.round((productionCostPropDto.engravedCasingsRequires * productionCostPropDto.engravedCasingsSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.batteriesCost = productionCostPropDto.batteriesRequires ? Math.round((productionCostPropDto.batteriesRequires * productionCostPropDto.batteriesSellPrice / 100) * 100) / 100 : 0
	productionCostPropDto.electronicsCost = productionCostPropDto.electronicsRequires ? Math.round((productionCostPropDto.electronicsRequires * productionCostPropDto.electronicsSellPrice) * 100) / 100 : 0


	productionCostPropDto.totalAllResoursesСost = Math.round(productionCostPropDto.allScrapMetalCost + productionCostPropDto.allCopperCost + productionCostPropDto.allWiresCost + productionCostPropDto.allPlasticCost + productionCostPropDto.allEngravedCasingsCost + productionCostPropDto.allBatteriesCost + productionCostPropDto.allElectronicsCost + productionCostPropDto.benchCost)
	productionCostPropDto.totalResoursesCost = Math.round(productionCostPropDto.scrapMetalCost + productionCostPropDto.copperCost + productionCostPropDto.wiresCost + productionCostPropDto.plasticCost + productionCostPropDto.engravedCasingsCost + productionCostPropDto.batteriesCost + productionCostPropDto.electronicsCost + productionCostPropDto.benchCost)

	return productionCostPropDto;
}

export function profitDto(component: IComponent, costPrice: number, ingridientsCost: number): IProfitPropDto {

	const profitPropDto: IProfitPropDto = {
		componentBuyPrice: component.buyPrice,
		commission: Math.round(component.buyPrice / 10),
		selfPrice: Math.round( costPrice + ingridientsCost),
		profit: 0,
	}
	profitPropDto.profit = Math.round(profitPropDto.componentBuyPrice - profitPropDto.commission - profitPropDto.selfPrice);

	return profitPropDto;
}