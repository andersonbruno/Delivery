import './Search.scss';
import churrasco from '../../assets/itens/churrasco.png';
import parmegiana from '../../assets/itens/parmegiana.png';
import spaten from '../../assets/itens/spaten.jpg';
import ItemCard from '../../components/ItemCard';
import StoreCardItem from '../../components/StoreCardItem';
import arnaldo from '../../assets/itens/arnaldo.jpg';
import { useParams } from 'react-router-dom';
import StoreCard from '../../components/StoreCard';
import mc from '../../assets/itens/MC.jpg';
import bonarabe from '../../assets/itens/bonarabe.png';
import { useState } from 'react';

export default function Search () {
    const { search } = useParams();
    const [ tab, setTab ] = useState(0);
    
    return (
        <div className='search-header'>
            <h2>Buscando por <span className='search-string'>{search}</span></h2>
            <div className='item-card-search-nav'>
                <button className={tab === 0 ? 'item-card-search-nav-button item-card-search-nav-button-selected' : 'item-card-search-nav-button'} onClick={() => setTab(0)}>Lojas</button>
                <button className={tab === 1 ? 'item-card-search-nav-button item-card-search-nav-button-selected' : 'item-card-search-nav-button'} onClick={() => setTab(1)}>Itens</button>
            </div>
            <div>
                {
                    tab === 1 ? (
                        <>
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
                        </>
                    ) : (
                        <div className='stores'>
                            <StoreCard 
                                name='Churrascaria do arnaldo' 
                                note='5.0' 
                                timeToDeliver='30-40' 
                                category='Brasileira' 
                                image={arnaldo}
                            />
                            <StoreCard 
                                name='Bonárabe - Parnamirim' 
                                note='4.5' 
                                timeToDeliver='30-40' 
                                category='Lanches' 
                                image={bonarabe}
                            />
                            <StoreCard 
                                name="Mcdonald's" 
                                note='4.9' 
                                timeToDeliver='30-40' 
                                category='Lanches' 
                                image={mc}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}