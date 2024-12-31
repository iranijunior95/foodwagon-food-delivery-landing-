import IconMotor from '../../assets/img/Icon-moto.svg';
import IconDelivery from '../../assets/img/Icon-sale.svg';
import IconSearchWhite from '../../assets/img/Icon-search-white.svg';
import ImageBase from '../../assets/img/Image-Base.png';
import ButtonDefault from '../../components/ButtonDefault';
import './style.css';

function SectionFlashDeals() {
    return (
        <section className='flash-deals'>
            <div className='are-you'>
                <div className='are-you-titulos'>
                    <h1>Are you starving?</h1>
                    <span>Within a few clicks, find meals that are accessible near you</span>
                </div>

                <div className='are-you-card'>
                    <div className='header'>
                        <span className='headerOption delivery'>
                            <img src={IconMotor} alt="icon delivery" />
                            Delivery
                        </span>

                        <span className='headerOption pickup'>
                            <img src={IconDelivery} alt="icon sale" />
                            Pickup
                        </span>
                    </div>

                    <hr />

                    <div className='body'>
                        <input 
                            type="text" 
                            name="inputAddress" 
                            id="inputAddress"
                            placeholder="Enter Your Address" 
                        />

                        <ButtonDefault 
                            tituloButton="Find Food"
                            iconButton={IconSearchWhite}    
                        />
                    </div>
                </div>
            </div>
            
            <div className='img-container'>
                <img 
                    src={ImageBase} 
                    alt="img base" 
                    className="img-base"
                />
            </div>
        </section>
    );
}

export default SectionFlashDeals;