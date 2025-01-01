import FlashDealCard from '../FlashDealCard';
import './style.css';

function ListFlashDealCard() {
    const productList = [
        {
            id: 1,
            name: 'Greys Vage',
            discount: 15,
            remainingTime: 6,
            image: 'Image-01-flash-deal-card.png'
        },

        {
            id: 2,
            name: 'Greys Vage',
            discount: 10,
            remainingTime: 6,
            image: 'Image-02-flash-deal.png'
        },

        {
            id: 3,
            name: 'Greys Vage',
            discount: 25,
            remainingTime: 7,
            image: 'Image-03-flash-deal.png'
        },

        {
            id: 4,
            name: 'Greys Vage',
            discount: 20,
            remainingTime: 8,
            image: 'Image-04-flash-deal.png'
        }
    ];

    return (
        <div className='list-flash-deal-card'>
            {productList.map(card => (
                <FlashDealCard
                    key={card.id} 
                    image={card.image}
                    discount={card.discount}
                    remainingTime={card.remainingTime}
                    name={card.name}
                />
            ))}
        </div>
    );
}

export default ListFlashDealCard;