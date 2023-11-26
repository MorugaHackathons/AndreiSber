import React from 'react';
import avatarImage from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="avatar">
                <img className={"avatar"} src={avatarImage} alt="Avatar" />
            </div>
            <input type="text" className="search-bar" placeholder="Поиск..." />
        </div>
    );
};

export default Header;
