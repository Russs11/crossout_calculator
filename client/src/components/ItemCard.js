import React from 'react';
import './ItemCard.scss'


const ItemCard = () => {
	return (
		<>
			<div className="main-card-head-item-img"></div>
			<div className="main-card-left-side-head">
				<div className="item-info">
					<div className="item-name-title text-2">ПУ14 Арбитр</div>
					<div className="item-type text-5">Пулемет</div>
					<div className="item-production-time-title text-4">Время производства:</div>
					<div className="item-production-cost-title text-4">Стоимость производства:</div>
					<div className="item-production-time-value text-1">12 часов</div>
					<div className="token value-orange text-1">75 <div className="token-img"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemCard;