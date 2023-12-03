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


export interface IComponentIngridientObject {
    id: number;
    img: string;
    count: number;
    sellPrice: number;
    cost: number;
}
export interface IComponentCostPropDto {
    ingridients: IComponentIngridientObject[];
    totalIngridientsCost: number;
}

export interface IProductionCostPropDto {

    benchCost: number;
    scrapMetalRequires: number | undefined;
    copperRequires: number | undefined;
    wiresRequires: number | undefined;
    plasticRequires: number | undefined;
    batteriesRequires: number | undefined;
    electronicsRequires: number | undefined;
    engravedCasingsRequires: number | undefined;

    allScrapMetalRequires: number | undefined;
    allWiresRequires: number | undefined;
    allCopperRequires: number | undefined;
    allPlasticRequires: number | undefined;
    allBatterriesRequires: number | undefined;
    allElectronicsRequires: number | undefined;
    allEngravedCasingsRequires: number | undefined;

    scrapMetalSellPrice: number;
    copperSellPrice: number;
    wiresSellPrice: number;
    plasticSellPrice: number;
    batteriesSellPrice: number;
    electronicsSellPrice: number;
    engravedCasingsSellPrice: number;

    allScrapMetalCost: number;
    allCopperCost: number;
    allWiresCost: number;
    allPlasticCost: number;
    allEngravedCasingsCost: number;
    allBatteriesCost: number;
    allElectronicsCost: number;

    scrapMetalCost: number;
    copperCost: number;
    wiresCost: number;
    plasticCost: number;
    engravedCasingsCost: number;
    batteriesCost: number;
    electronicsCost: number;

    totalAllResoursesСost: number;
    totalResoursesCost: number;
}

export interface IProfitPropDto {
    componentBuyPrice: number;
    commission: number;
    selfPrice: number;
    profit: number;
}

export interface IIngridientsFromInput{
id: number;
count: number | null;
}