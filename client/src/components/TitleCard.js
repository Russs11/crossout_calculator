import React from 'react';
import './TitleCard.scss'


const TitleCard = ({component}) => {
	const itemImg = {
		backgroundImage: 'url(' + component.img + ')'
	}

			return (
			<>
				<div className="main-card-head-item-img" style={itemImg}></div>
				<div className="main-card-left-side-head">
					<div className="item-info">
						<div className="item-name-title text-2">{component.name}</div>
						<div className="item-type text-5">{component.type}</div>
						<div className="item-production-time-title text-4">Время производства:</div>
						<div className="item-production-cost-title text-4">Стоимость производства:</div>
							<div className="item-production-time-value text-1">{component.productionTime ? component.productionTime : 0 }</div>
							<div className="token value-orange text-1">{component.benchCost ? component.benchCost : 0}<div className="token-img"></div>
						</div>
					</div>
				</div>
			</>
		)

};

export default TitleCard;