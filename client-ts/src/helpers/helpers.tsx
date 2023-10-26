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

import { ICommonVehicleComponent, IComponent, IComponentCostPropDto, IComponentIngridientObject, IEpicVehicleComponent, IRareVehicleComponent, ISpecialVehicleComponent } from "../interfaces/Interfaces";

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