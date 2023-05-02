import React from 'react';
import './Component.scss'


const Component = () => {


	function clickHandler(event){
		event.currentTarget.classList.toggle('component-image-active');
	}


	return (
		<div>
			<div className="component-image" onClick={clickHandler} ></div>
		</div>
	);
};

export default Component;