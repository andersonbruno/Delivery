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
    const tabStores = mockStores.filter((store) => search !== undefined && store.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    const tabItems = mockStores.filter((store) => {
        const result = store.items.filter((item) => {
            return search !== undefined && item.name.toUpperCase().includes(search.toLocaleUpperCase())
        })

        return result.length > 0;
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
                                                key={store.id}
                                            />
                                            <div className='items-card'>
                                                <>
                                                    {
                                                        store.items.map((item) => {
                                                            return (<ItemCard 
                                                                name={item.name}
                                                                image={item.image}
                                                                price={item.price}
                                                            />)
                                                        })
                                                    }
                                                </>
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
                                            key={store.id}
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