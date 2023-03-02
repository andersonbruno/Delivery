import './Search.scss';
import churrasco from '../../assets/itens/churrasco.png';
import parmegiana from '../../assets/itens/parmegiana.png';
import spaten from '../../assets/itens/spaten.jpg';
import ItemCard from '../../components/ItemCard';
import StoreCardItem from '../../components/StoreCardItem';
import arnaldo from '../../assets/itens/arnaldo.jpg';
import { useParams } from 'react-router-dom';

export default function Search () {
    const { search } = useParams();
    return (
        <div className='search-header'>
            <div className=''>
                <h2>Buscando por <span className='search-string'>{search}</span></h2>
                <div className='item-card-search-nav'>
                    <button className='item-card-search-nav-button item-card-search-nav-button-selected'>Lojas</button>
                    <button className='item-card-search-nav-button'>Itens</button>
                </div>
                <StoreCardItem
                    name='Churrascaria do arnaldo' 
                    note='5.0' 
                    timeToDeliver='30-40' 
                    category='Brasileira' 
                    image={arnaldo}
                />
                <div className='items-card'>
                    <ItemCard 
                        name='Combo mistão (serve 4 pessoas) + Guaraná 2litros' 
                        image={churrasco}
                        price='138,00'
                    />
                    <ItemCard 
                        name='Combo parmegiana (serve 4 pessoas) + Guaraná 2 litros' 
                        image={parmegiana}
                        price='128,00'
                    />
                    <ItemCard
                        name='Spaten log nek 10 unidade' 
                        image={spaten}
                        price='105,50'
                    />
                </div>
            </div>
        </div>
    )
}