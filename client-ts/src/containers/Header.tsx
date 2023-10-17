import React from 'react';
import "./Header.scss"

interface IHeaderPropsDto {
    children: JSX.Element;
}

const Header = ({ children }: IHeaderPropsDto) => {
    return (
        <div className="header">
            {children}
        </div>
    );
};

export default Header;