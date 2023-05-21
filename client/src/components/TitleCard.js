import React from 'react';
import './TitleCard.scss'


const TitleCard = ({name, type, img}) => {
	const itemImg = {
		backgroundImage: 'url(' + img + ')'
		// background: 'green'
	}
console.log('name', name);
			return (
			<>
				<div className="main-card-head-item-img" style={itemImg}></div>
				<div className="main-card-left-side-head">
					<div className="item-info">
						<div className="item-name-title text-2">{name}</div>
						<div className="item-type text-5">{type}</div>
						<div className="item-production-time-title text-4">Время производства:</div>
						<div className="item-production-cost-title text-4">Стоимость производства:</div>
						<div className="item-production-time-value text-1">12 часов</div>
						<div className="token value-orange text-1">75 <div className="token-img"></div>
						</div>
					</div>
				</div>
			</>
		)

};

export default TitleCard;