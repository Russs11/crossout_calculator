import React from 'react';
import './RequiredComponents.scss'
import HorizontalSeparator from './HorizontalSeparator';



const RequiredComponents = () => {
    return (
        <>
            <div className="required-components">
                <div className="required-components-title text-5">Компоненты:</div>
                <HorizontalSeparator />
                <div className="item-required">
                    <div className="component-image_8"></div>
                    <div className="item-required-info">
                        <div className="item-name-title text-4">ПУ13 Уравнитель</div>
                        <div className="item-type text-7">Пулемёт</div>
                        <div className="item-production-time-title text-6">Время производства:</div>
                        <div className="item-production-cost-title text-6">Стоимость производства:</div>
                        <div className="item-production-time-value text-3">6 часов</div>
                        <div className="small-token value-orange text-3">15 <div className="token-img"></div></div>
                    </div>
                </div>
            <HorizontalSeparator/>
           
            <div className="item-required-resources-grid">
                <div className="text-7">Ресурсы:</div>
                <div className="text-7">Количество:</div>
                <div className="text-7">Цена:</div>
                <div className="text-7">Стоимость:</div>
                <div className="resourses-img_1 small"></div>
                <div className="value text-8">100</div>
                <div className="value-orange text-8">4.91</div>
                <div className="value-orange text-8">4.91</div>
                <div className="resourses-img_2 small"></div>
                <div className="value text-8">750</div>
                <div className="value-orange text-8">11.04</div>
                <div className="value-orange text-8">22.08</div>
                <div className="resourses-img_3 small"></div>
                <div className="value text-8">150</div>
                <div className="value-orange text-8">3.32</div>
                <div className="value-orange text-8">6.64</div>
                <div className="resourses-img_4 small"></div>
                <div className="value text-8">100</div>
                <div className="value-orange text-8">36.33</div>
                <div className="value-orange text-8">36.33</div>
                <div className="total-resourses-cost text-7">Общая стоимость ресурсов:</div>
                <div className="value-orange text-8">66.96</div>
                </div>
            </div>
        </>
    );
};

export default RequiredComponents;