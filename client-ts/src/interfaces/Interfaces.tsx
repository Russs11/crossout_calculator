

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