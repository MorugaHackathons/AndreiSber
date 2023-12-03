import React, { useState } from 'react';
import avatarImage from '../../assets/logo.svg';
import './Header.scss';

const Header = ({ tasks, setSortedTasks }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));
        setSortedTasks(filteredTasks);
        console.log(searchQuery);
        console.log(filteredTasks);
    };

    const handleSortByName = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
        setSortedTasks(sortedTasks);
    };

    return (
        <div className="header">
            <div className="avatar">
                <img className={"avatar"} src={avatarImage} alt="Avatar" />
            </div>
            <input
                type="text"
                className="search-bar"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="sort-button" onClick={handleSortByName}>
                Сортировать по имени
            </button>
        </div>
    );
};

export default Header;
