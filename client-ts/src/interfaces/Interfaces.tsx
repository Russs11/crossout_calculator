import { CommonVehicleComponent } from "../entity/commonVehicleComponent";
import { RareVehicleComponent } from "../entity/rareVehicleComponent";
import { SpecialVehicleComponent } from "../entity/specialVehicleComponent";
import { EpicVehicleComponent } from "../entity/epicVehicleComponent";
export interface IResourcesFromInput {
    scrapMetal: number;
    copper: number;
    wires: number;
    plastic: number;
    engravedCasings: number;
    batteries: number;
    electronics: number;
}

export interface ICommonVehicleComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    scrapMetal: number;
    copper: number;
    img: string;
    getScrapMetal: () => number;
    getCopper: () => number;
}

export interface IRareVehicleComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    productionTime: number;
    benchCost: number;
    scrapMetal: number;
    copper: number;
    ingredients: ICommonVehicleComponent[];
    img: string;
    getScrapMetal: () => number;
    getCopper: () => number;
    getBenchCost: () => number;
    getAllScrapMetal: () => number;
    getAllCopper: () => number;
}

export interface ISpecialVehicleComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    productionTime: number;
    benchCost: number;
    scrapMetal: number;
    copper: number;
    wires: number;
    plastic: number;
    engravedCasings: number;
    ingredients: IRareVehicleComponent[];
    img: string;
    getScrapMetal: () => number;
    getCopper: () => number;
    getWires: () => number;
    getPlastic: () => number;
    getEngravedCasings: () => number;
    getBenchCost: () => number;
    getAllScrapMetal: () => number;
    getAllCopper: () => number;
    getAllBenchCost: () => number;
}

export interface IEpicVehicleComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    productionTime: number;
    benchCost: number;
    scrapMetal: number;
    copper: number;
    wires: number;
    plastic: number;
    batteries: number;
    electronics: number;
    engravedCasings: number;
    ingredients: ISpecialVehicleComponent[];
    img: string;
    getScrapMetal: () => number;
    getCopper: () => number;
    getWires: () => number;
    getPlastic: () => number;
    getBatteries: () => number;
    getEngravedCasings: () => number;
    getBenchCost: () => number;
    getAllScrapMetal: () => number;
    getAllCopper: () => number;
    getAllWires: () => number;
    getAllPlastic: () => number;
    getAllEngravedCasings: () => number;
    getAllBenchCost: () => number;
}
export interface IComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    scrapMetal: number;
    copper: number;
    wires?: number;
    plastic?: number;
    batteries?: number;
    electronics?: number;
    engravedCasings?: number;
    img: string;
    productionTime?: number;
    benchCost?: number;
    ingredients?: ICommonVehicleComponent[] | IRareVehicleComponent[] | ISpecialVehicleComponent[] | IEpicVehicleComponent[];
    getScrapMetal?: () => number;
    getCopper?: () => number;
    getElectronics?: () => number;
    getBatteries?: () => number;
    getWires?: () => number;
    getPlastic?: () => number;
    getEngravedCasings?: () => number;
    getBenchCost?: () => number;

    getAllScrapMetal?: () => number;
    getAllCopper?: () => number;
    getAllBatteries?: () => number;
    getAllWires?: () => number;
    getAllPlastic?: () => number;
    getAllEngravedCasings?: () => number;
    getAllBenchCost?: () => number;
    getAllElectronics?: () => number;

}
export interface IItem {
    id: number;
    name: string;
    profitRatio: number;
}

export interface IResourcePrices {
    buyPrice: number;
    dbId: number;
    dbName: string;
    id: number;
    name: string;
    sellPrice: number;
}


