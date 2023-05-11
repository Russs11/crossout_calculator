import React from 'react';
import './Item.scss'
import { useState } from 'react';


const Item = () => {
const [itemActive, setItemActive] = useState(false)

	function clickHandler(event){
		setItemActive(true)
		event.currentTarget.classList.add('component-image-active');
		if (itemActive) {
			event.currentTarget.classList.remove('component-image-active');

			setItemActive(false)
		}
	}


	return (
		<div>
			<div className="component-image" onClick={clickHandler} ></div>
		</div>
	);
};

export default Item;