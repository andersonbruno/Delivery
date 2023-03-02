import './StoreCardItem.scss';
import { AiFillStar } from 'react-icons/ai';

interface StoreProps {
    name: string;
    category: string;
    image: string;
    note: string;
    timeToDeliver: string;
}

export default function StoreCard (props: StoreProps) {
    const { name, category, image, note, timeToDeliver } = props;
    return (
        <div className='store-card-item-container'>
            <div className='store-card-item-image'>
                <img src={image} alt={timeToDeliver}/>
            </div>
            <div className='store-card-item-infos'>
                <div className='store-card-item-info store-title'>{name}</div>
                <div className='store-card-item-info'>
                    <div className='store-card-item-star store-card-item-note'><AiFillStar/></div>
                    <div className='store-card-item-note'>{note}</div>
                    <div className='store-card-item-category'> • {category} • {timeToDeliver} minutos</div>
                </div>
            </div>
        </div>
    )
}