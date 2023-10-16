import React from 'react';
import './Item.scss'
import { useState } from 'react';


const Item = ({ id, active, handleClick, img }: { id: number, active: boolean, handleClick: (id: number) => void, img: string }) => {
	// console.log(typeof(img));
	const itemImg: {} = {
		backgroundImage: 'url(' + img + ')'
	}

	if (active) {
		return (
			<>
				<div className="component-image component-image-active" style={itemImg}>{id}</div>
			</>
		);
	}
	else {
		return (
			<>
				<div className="component-image " style={itemImg} onClick={() => handleClick(id)}>{id}</div >
			</>
		);
	}
};

export default Item;