import './Search.scss';
import ItemCard from '../../components/ItemCard';
import StoreCardItem from '../../components/StoreCardItem';
import { useParams } from 'react-router-dom';
import StoreCard from '../../components/StoreCard';
import { useState } from 'react';
import { mockStores } from '../../mock/stores';

export default function Search () {
    const { search } = useParams();
    const [ tab, setTab ] = useState(0);

    const generateKey = () => {
        return Math.random();
    }

    const tabStores = mockStores.filter((store) => {
        const hasStore = search !== undefined && store.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());

        const resultItem = store.items.filter((item) => {
            return search !== undefined && item.name.toUpperCase().includes(search.toLocaleUpperCase())
        })

        if(resultItem.length > 0 || hasStore){
            return true;
        }

        return false;
    });

    const tabItems = mockStores.filter((store) => {
        const resultItem = store.items.filter((item) => {
            return search !== undefined && item.name.toUpperCase().includes(search.toLocaleUpperCase())
        })

        if(resultItem.length > 0){
            return true;
        }

        return false;
    });

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
                            {
                                tabItems.map((store) => {
                                    return (
                                        <>
                                            <StoreCardItem
                                                name={store.name}
                                                note={store.note}
                                                timeToDeliver={store.timeToDeliver}
                                                category={store.category}
                                                image={store.image}
                                                key={generateKey()}
                                            />
                                            <div className='items-card'>
                                                {
                                                    store.items.map((item) => {
                                                        return (<ItemCard 
                                                            name={item.name}
                                                            image={item.image}
                                                            price={item.price}
                                                            key={generateKey()}
                                                        />)
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <div className='stores'>
                            <>
                                {
                                    tabStores.map((store) => {
                                        return (
                                            <StoreCard 
                                            name={store.name}
                                            note={store.note}
                                            timeToDeliver={store.timeToDeliver}
                                            category={store.category}
                                            image={store.image}
                                            key={generateKey()}
                                            />
                                        )
                                    })
                                }
                            </>
                        </div>
                    )
                }
            </div>
        </div>
    )
}