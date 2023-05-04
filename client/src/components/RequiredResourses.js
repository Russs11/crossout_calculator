import React from 'react';
import './RequiredResourses.scss'



const RequiredResourses = ({ type }) => {

	if (type === 'bigCard') {
		return (
			<div>
				<div className="production-requirements-grid">
					<div className="text-5">Ресурсы:</div>
					<div className="text-5">Количество:</div>
					<div className="text-5">Цена:</div>
					<div className="text-5">Стоимость:</div>
					<div className="resourses-img_1"></div>
					<div className="value text-3">100</div>
					<div className="value-orange text-3">4.91</div>
					<div className="value-orange text-3">100</div>
					<div className="resourses-img_2"></div>
					<div className="value text-3">750</div>
					<div className="value-orange text-3">4.49</div>
					<div className="value-orange text-3">3367.5</div>
					<div className="resourses-img_3"></div>
					<div className="value text-3">750</div>
					<div className="value-orange text-3">3.32</div>
					<div className="value-orange text-3">26.56</div>
					<div className="resourses-img_4"></div>
					<div className="value text-3">750</div>
					<div className="value-orange text-3">1.89</div>
					<div className="value-orange text-3">3367</div>
					<div className="total-resourses-cost text-5">Общая стоимость ресурсов:</div>
					<div className="value-orange text-3">3540.72</div>
				</div>
			</div>
		);
		
	}
	
	if (type === 'smallCard') {
		return (
			<div>
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
		);

	}
	
};

export default RequiredResourses;