import React, { ReactElement } from 'react';
import './ProductionRequirements.scss'
import HorizontalSeparator from './HorizontalSeparator';
import RequiredResourses from './RequiredResourses';
import { IComponent, IResourcePrices } from '../interfaces/Interfaces';


const ProductionRequirements = ({ component, resourcePrices }: { component: IComponent, resourcePrices: IResourcePrices[] }): ReactElement =>  {

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