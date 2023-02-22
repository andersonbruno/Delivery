import bonarabe from '../../assets/itens/bonarabe.png';
import './Store.scss';
import { AiFillStar } from 'react-icons/ai';

export default function Store () {
    return (
        <div className='store-container grow'>
            <div className='image'>
                <img src={bonarabe} alt="Churrascaria do arnaldo"/>
            </div>
            <div className='stores-infos'>
                <div className='store-info store-title'>Churrascaria do Arnaldo</div>
                <div className='store-info'>
                    <div className='store-star store-note'><AiFillStar/></div>
                    <div className='store-note'>5.0</div>
                    <div className='store-category'> • Brasileira</div>
                </div>
                <div className='store-info'>50-60 minutos</div>
            </div>
        </div>
    )
}