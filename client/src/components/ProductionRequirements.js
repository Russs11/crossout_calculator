import React from 'react';
import './ProductionRequirements.scss'
import HorizontalSeparator from './HorizontalSeparator';
import RequiredResourses from './RequiredResourses';



const ProductionRequirements = ({component}) => {
    return (
        <>
            <div className="production-requirements">
                <div className="production-requirements-title text-4">Для производства требуется:</div>
                <HorizontalSeparator />
                <RequiredResourses component={ component}/>
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ProductionRequirements;