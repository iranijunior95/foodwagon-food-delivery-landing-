import { useState } from 'react';
import MaskGroupIcon from '../../assets/img/Mask Group.svg';
import MapMarkerIcon from '../../assets/img/map-marker-alt.svg';
import BtnMenu from '../../assets/img/menu-rounded.svg';
import GroupBtns from '../GroupBtns';
import './style.css';

function Header() {
    const [menuMobileActive, setMenuMobileActive] = useState(false);

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
                    ( São Paulo )
                    <span>Brazil</span>
                </p>
            </div>

            <GroupBtns />

            <button 
                type="button" 
                className='btn-menu-mobile'
                onClick={() => setMenuMobileActive(!menuMobileActive)}
            >
                <img src={BtnMenu} alt="menu btn" />
            </button>

            <div className={menuMobileActive ? 'menu-mobile active' : 'menu-mobile'}>
                <GroupBtns direction="collum"/>
            </div>
        </header>
    );
}

export default Header;