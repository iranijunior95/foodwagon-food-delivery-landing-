import './style.css';

function FlashDealCard({name, discount, remainingTime, image}) {
    return (
        <div className='flash-deal-card'>
            <div className='header'>
                <img 
                    src={`/images/${image}`} 
                    alt="image card" 
                />

                <div className='discount'>
                    <p>{discount}</p>
                    <div>
                        <span>%</span>
                        <span>Off</span>
                    </div>
                </div>
            </div>
            
            <div className='body'>
                <p>{name}</p>
                <span>{remainingTime} Days Remaining</span>
            </div>
        </div>
    );
}

export default FlashDealCard;