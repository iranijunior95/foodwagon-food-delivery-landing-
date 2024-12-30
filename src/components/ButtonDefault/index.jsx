import './style.css';

function ButtonDefault({tituloButton, iconButton}) {
    return (
        <button 
            type="button" 
            className='buttonDefault'
        >
            <img src={iconButton} alt="icon button" />
            {tituloButton}
        </button>
    ); 
}

export default ButtonDefault;