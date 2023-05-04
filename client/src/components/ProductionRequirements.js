import React from 'react';
import './ProductionRequirements.scss'
import HorizontalSeparator from './HorizontalSeparator';
import RequiredResourses from './RequiredResourses';



const ProductionRequirements = () => {
    return (
        <>
            <div className="production-requirements">
                <div className="production-requirements-title text-4">Для производства требуется:</div>
                <HorizontalSeparator />
                <RequiredResourses type='bigCard'/>
                <HorizontalSeparator />
            </div>
        </>
    );
};

export default ProductionRequirements;