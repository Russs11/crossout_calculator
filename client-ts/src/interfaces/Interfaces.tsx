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
    ingredients?: CommonVehicleComponent[] | RareVehicleComponent[] | SpecialVehicleComponent[] | EpicVehicleComponent[];
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
    id: number,
    name: string,
    profitRatio: number
}

export interface IResourcePrices {
    buyPrice: number,
    dbId: number,
    dbName: string,
    id: number,
    name: string,
    sellPrice: number
}