import React from 'react';
import './ComponentsList.scss'
import './Component'
import Component from './Component';

const ComponentsList = () => {
	return (
		<div>
			<div className="components">
				<div className="components-title">Компоненты</div>
				<div className="components-wrapper">
				<Component/>
				<Component/>
				<Component/>
				<Component/>
				<Component/>
				<Component/>
				</div>
			</div>
		</div>
	);
};

export default ComponentsList;