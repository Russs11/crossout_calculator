import React from 'react';
import './RequiredComponents.scss'
import HorizontalSeparator from './HorizontalSeparator';
import RequiredResourses from './RequiredResourses';
import ItemCard from './ItemCard';


const RequiredComponents = () => {
    return (
        <>
            <div className="required-components">
                <div className="required-components-title text-5">Компоненты:</div>
                <HorizontalSeparator/>
                <ItemCard type='smallCard'/>
                <HorizontalSeparator />
                <RequiredResourses type='smallCard' />
            </div>
        </>
    );
};

export default RequiredComponents;