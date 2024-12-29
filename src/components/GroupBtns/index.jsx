import { useState } from 'react';
import SearchIcon from '../../assets/img/Search.svg';
import UserIcon from '../../assets/img/user.svg';
import './style.css';

function GroupBtns({ direction }) {
    const [activeSearch, setActiveSearch] = useState(false);
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className={direction === 'collum' ? 'header-group-btns directionCollun' : 'header-group-btns'}>
            <div className={activeSearch ? 'input-search active' : 'input-search'}>
                <img src={SearchIcon} alt="search-icon" />
                <input 
                    type="text" 
                    placeholder='Search Food...'
                    value={inputSearch}
                    onChange={event => setInputSearch(event.target.value)}
                    onBlur={() => setActiveSearch(!activeSearch)} 
                />
            </div>

            <button 
                type="button" 
                className={activeSearch ? 'btn-search active' : 'btn-search'}
                onClick={() => setActiveSearch(!activeSearch)}
            >
                <img src={SearchIcon} alt="search-icon" /> 
                Search Food
            </button>

            <button type="button" className='btn-login'>
                <img src={UserIcon} alt="search-icon" />
                Login
            </button>
        </div>
    );
}

export default GroupBtns;