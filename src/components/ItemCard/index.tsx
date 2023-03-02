import './ItemCard.scss';

interface ItemCardProps {
    image: string;
    name: string;
    price: string;
}

export default function ItemCard ({ image, name, price}: ItemCardProps) {
    return (
        <div className='item-card-container item-card-grow'>
            <div className='item-card-image'>
                <img src={image} alt={name}/>
            </div>
            <div className='item-card-title'>
                {name}
            </div>
            <div className='item-card-price'>
                R$ {price}
            </div>
        </div>
    )
}