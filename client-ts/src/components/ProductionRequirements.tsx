import React from 'react';
import './ProductionRequirements.scss'
import HorizontalSeparator from './HorizontalSeparator';
import RequiredResourses from './RequiredResourses';

interface IComponent {
    id: number;
    name: string;
    type: string;
    rarity: string;
    buyPrice: number;
    sellPrice: number;
    scrapMetal: number;
    copper: number;
    img: string;
    productionTime?: number;
    benchCost?: number;
}

interface IResourcePrices {
    buyPrice: number,
    dbId: number,
    dbName: string,
    id: number,
    name: string,
    sellPrice: number
}

const ProductionRequirements = ({ component, resourcePrices }: { component: IComponent, resourcePrices: IResourcePrices }) => {
    return (
        <>
            <div className="production-requirements">
                <div className="production-requirements-title text-4">Для производства требуется:</div>
                <HorizontalSeparator />
                <RequiredResourses
                    component={component}
                    resourcePrices={resourcePrices} />
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ProductionRequirements;