import styles from './Search.module.scss';
import ItemCard from '../../components/ItemCard';
import StoreCardItem from '../../components/StoreCardItem';
import { useParams } from 'react-router-dom';
import StoreCard from '../../components/StoreCard';
import { useState } from 'react';
import { mockStores } from '../../mock/stores';
import classNames from 'classnames';

export default function Search () {
    const { search } = useParams();
    enum Store {
        Tab1 =0,
        Tab2 =1
    }
    const [ tab, setTab ] = useState(Store.Tab1);


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

    const SelectedTab = {
        [Store.Tab1]: <div className={styles.stores}>
            {
                tabStores.length ?
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
                :<h3>Nenhum resultado encontrado.</h3>
            }
        </div>       
        ,
        [Store.Tab2]:  
        <>
            { tabItems.length ?
                tabItems.map((restaurant) => {
                return (
                    <div key={restaurant.id}>
                        <StoreCardItem
                            name={restaurant.name}
                            note={restaurant.note}
                            timeToDeliver={restaurant.timeToDeliver}
                            category={restaurant.category}
                            image={restaurant.image}
                          
                        />
                        <div className={styles['items-card']}>
                            {
                                    restaurant.items.map((itemDetail) => {  
                                    return (<ItemCard 
                                        name={itemDetail.name}
                                        image={itemDetail.image}
                                        price={itemDetail.price}
                                       key={itemDetail.id}
                                    />)
                                })
                            }
                        </div>
                    </div>
                )
            }) : <h3>Nenhum resultado encontrado.</h3>}
        </>
    }

    return (
        <div className={styles.header}>
            <h2>Buscando por <span>{search}</span></h2>
            <div className={styles['search-nav']}>
                <button className={classNames(styles['search-button'], { [styles['search-button-selected']]: tab === Store.Tab1 })} onClick={() => setTab(Store.Tab1)}>Lojas</button>
                <button className={classNames(styles['search-button'], { [styles['search-button-selected']]: tab === Store.Tab2 })} onClick={() => setTab(Store.Tab2)}>Itens</button>
            </div>
            <div>
            {SelectedTab[tab]}
            </div>
        </div>
    )
}