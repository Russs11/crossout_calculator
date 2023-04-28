import React from 'react';
import './Components.scss'


const ComponentsList = () => {
	return (
		<div>
			<div className="components">
				<div className="components-title">Компоненты</div>
				<div className="components-wrapper">
					<div className="component-image1">1</div>
					<div className="component-image1">2</div>
					<div className="component-image1">3</div>
					<div className="component-image1">4</div>
					<div className="component-image1">5</div>
					<div className="component-image1 active">6</div>
					<div className="component-image1">7</div>
					<div className="component-image1">7</div>
				</div>
			</div>
		</div>
	);
};

export default ComponentsList;