import React from 'react';
import './ProductionCost.scss'
import HorizontalSeparator from './HorizontalSeparator';

const ProductionCost = () => {
    return (
        <>
            <div className="production-cost">
                <div className="production-cost-title text-4">Себестоимость производства:</div>
                <div className="production-cost-grid">
                    <div className="text-5">Ресурсы:</div>
                    <div className="text-5">Количество:</div>
                    <div className="text-5">Цена:</div>
                    <div className="text-5">Стоимость:</div>
                    <div className="resourses-img_1"></div>
                    <div className="value text-3">22400</div>
                    <div className="value-orange text-3">4.91</div>
                    <div className="value-orange text-3">1099.84</div>
                    <div className="resourses-img_3"></div>
                    <div className="value text-3">7271</div>
                    <div className="value-orange text-3">3.32</div>
                    <div className="value-orange text-3">242.36</div>
                    <div className="resourses-img_5"></div>
                    <div className="value text-3">2500</div>
                    <div className="value-orange text-3">11.04</div>
                    <div className="value-orange text-3">2674.44</div>
                    <div className="resourses-img_7"></div>
                    <div className="value text-3">1250</div>
                    <div className="value-orange text-3">36.33</div>
                    <div className="value-orange text-3">472.29</div>
                    <div className="resourses-img_4"></div>
                    <div className="value text-3">750</div>
                    <div className="value-orange text-3">1.89</div>
                    <div className="value-orange text-3">141.75</div>
                    <div className="resourses-img_2"></div>
                    <div className="value text-3">750</div>
                    <div className="value-orange text-3">4.49</div>
                    <div className="value-orange text-3">336.75</div>
                    <div className="machine-rental text-7">Аренда станка:</div>
                    <div className="value-orange text-3">330</div>
                    <div className="total text-7">Всего:</div>
                    <div className="value-orange text-3">5297.43</div>
                </div>
            </div>
            <HorizontalSeparator/>
        </>
    );
};

export default ProductionCost;