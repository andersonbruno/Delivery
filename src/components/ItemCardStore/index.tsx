import './ItemCardStore.scss';

interface ItemProps {
    name: string;
    description: string;
    image: string;
    price: string;
}

export default function ItemCardStore (props: ItemProps) {
    const {name, description, image, price } = props;
    return (
        <div className='item-container'>
            <div className='items-infos'>
                <div className='item-title'>
                    <h3>{name}</h3>
                </div>
                <div className='item-info'>
                    <div className='item-description'>
                        {description}
                    </div>
                </div>
                <div className='item-price'>
                    R$ {price}
                </div>
            </div>
            <div className='item-image'>
                <img src={image} alt='Churrasco'/>
            </div>
        </div>
    );
}