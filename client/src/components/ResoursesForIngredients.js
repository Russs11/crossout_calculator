import React from 'react';
import './RequiredResourses.scss'


const ResoursesForIngredients = () => {
	return (
		<>
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
		</>
	);
};

export default ResoursesForIngredients;