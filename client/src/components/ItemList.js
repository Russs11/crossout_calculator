import React from 'react';
import './ItemList.scss'
import Item from './Item';

const ItemList = () => {



	
	return (
		<div>
			<div className="components">
				<div className="components-title">Компоненты</div>
				<div className="components-wrapper">
				<Item/>
				
				</div>
			</div>
		</div>
	);
};

export default ItemList;