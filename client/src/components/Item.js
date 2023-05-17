import React from 'react';
import './Item.scss'
import { useState } from 'react';

const Item = ({ id, active, handleClick, img }) => {
console.log(typeof(img));
const itemImg = {
	backgroundImage: `url(` + img + `)`
	// background: 'green'
}
console.log(itemImg);
// console.log(itemImg);
	if (active) {
		return (
			<>
				<div className="component-image component-image-active" style={itemImg} onClick={() => handleClick(id)} >{id}</div>
			</>
		);
	}
	else {
		return (
			<>
				<div className="component-image " style={itemImg} onClick={() => handleClick(id)} >{id}</div>
			</>
		);
	}
};

export default Item;