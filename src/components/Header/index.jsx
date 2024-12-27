import MaskGroupIcon from '../../assets/img/Mask Group.svg';
import MapMarkerIcon from '../../assets/img/map-marker-alt.svg';
import SearchIcon from '../../assets/img/Search.svg';
import UserIcon from '../../assets/img/user.svg';
import './style.css';

function Header() {
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
                <button type="button" className='btn-search'>
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