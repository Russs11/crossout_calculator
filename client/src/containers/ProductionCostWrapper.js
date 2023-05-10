import React from 'react';
import './ProductionCostWrapper.scss'


const ProductionCostWrapper = ({children}) => {
    return (
        <>
            <div className="main-card-middle-side">
					{children}
			</div>
        </>
    );
};

export default ProductionCostWrapper;