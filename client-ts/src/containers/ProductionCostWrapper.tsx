import React from 'react';
import './ProductionCostWrapper.scss'

interface IProductionCostWrapperPropsDto {
    children: JSX.Element[];
}
const ProductionCostWrapper = ({ children }: IProductionCostWrapperPropsDto) => {
    return (
        <>
            <div className="main-card-middle-side">
                {children}
            </div>
        </>
    );
};

export default ProductionCostWrapper;