import React from 'react';
import './Component.scss'


const Component = () => {


	function clickHandler(event){
		event.target.classList.add('component-image-active');
		event.target.classList.remove('component-image-active');
	}


	return (
		<div>
			<div className="component-image" onClick={clickHandler} ></div>
		</div>
	);
};

export default Component;