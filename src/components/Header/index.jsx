import { useState } from 'react';
import MaskGroupIcon from '../../assets/img/Mask Group.svg';
import MapMarkerIcon from '../../assets/img/map-marker-alt.svg';
import SearchIcon from '../../assets/img/Search.svg';
import UserIcon from '../../assets/img/user.svg';
import './style.css';

function Header() {
    const [activeSearch, setActiveSearch] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    
    return (
        <header>
            <div className='header-logo'>
                <img src={MaskGroupIcon} alt="logo" />
                <span>
                    <p>food</p>
                    <p>wagon</p>
                </span>
            </div>

            <div className='header-info-localizacao'>
                <span>Deliver to:</span>
                <p>
                    <img src={MapMarkerIcon} alt="localizacao-icon" />
                    Current Location
                    <span>Mohammadpur Bus Stand, Dhaka</span>
                </p>
            </div>

            <div className='header-group-btns'>
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
        </header>
    );
}

export default Header;