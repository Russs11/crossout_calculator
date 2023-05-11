import React from 'react';
import './ResoursesAvailableWrapper.scss'


const ResoursesAvailableWrapper = ({ children }) => {
	return (
		<>
			<div class="main-card-right-side">
				{children}
			</div>
		</>
	);
};

export default ResoursesAvailableWrapper;