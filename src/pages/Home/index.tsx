import StoreCard from '../../components/StoreCard';
import styles from './Home.module.scss';
import { mockStores } from '../../mock/stores';
//import ItemCardStore from '../../components/ItemCardStore';
//import churrasco from '../../assets/itens/churrasco.png';
//import parmegiana from '../../assets/itens/parmegiana.png';
//import spaten from '../../assets/itens/spaten.jpg';
//import ItemCard from '../../components/ItemCard';
//import StoreCardItem from '../../components/StoreCardItem';

export default function Home () {
    return (
        <div className={styles.header}>
            <h3>Lojas</h3>
            <div className={styles.stores}>
                {
                    mockStores.map((store) => {
                        return <StoreCard 
                            name={store.name}
                            note={store.note}
                            timeToDeliver={store.timeToDeliver} 
                            category={store.category} 
                            image={store.image}
                            key={store.id}
                        />
                    })
                }
            </div>
            { /*
            <div className=''>
                <h2>Buscando por mistão</h2>
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
            <h3>Produtos</h3>
            <div className='items'>
                <ItemCardStore 
                    name='Combo mistão (serve 4 pessoas) + Guaraná 2litros' 
                    description='Carne, frango e linguiça. Acompanha arroz de leite, feijão verde, farofa, Vinagrete, macaxeira cozida, macarrão, pirão de queijo.'
                    image={churrasco}
                    price='138,00'
                />
                <ItemCardStore 
                    name='Combo parmegiana (serve 4 pessoas) + Guaraná 2 litros' 
                    description='Filé de carne ou frango empanado. Acompanha macarrão ao molho de tomate.'
                    image={parmegiana}
                    price='128,00'
                />
                <ItemCardStore 
                    name='Spaten log nek 10 unidade' 
                    description='Spaten'
                    image={spaten}
                    price='105,50'
                />
            </div>
            */}
        </div>
    )
}