import './StoreCard.scss';
import { AiFillStar } from 'react-icons/ai';

interface StoreProps {
    name: string;
    category: string;
    image: string;
    note: string;
    timeToDeliver: number;
}

export default function StoreCard (props: StoreProps) {
    const { name, category, image, note, timeToDeliver } = props;
    return (
        <div className='store-container grow'>
            <div className='image'>
                <img src={image} alt={name}/>
            </div>
            <div className='stores-infos'>
                <div className='store-info store-title'>{name}</div>
                <div className='store-info'>
                    <div className='store-star store-note'><AiFillStar/></div>
                    <div className='store-note'>{note}</div>
                    <div className='store-category'> • {category}</div>
                </div>
                <div className='store-info'>{timeToDeliver} minutos</div>
            </div>
        </div>
    )
}