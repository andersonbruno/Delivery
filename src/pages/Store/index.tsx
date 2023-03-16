import styles from './Store.module.scss';
import banner from '../../assets/itens/DEFAULT.png';
import { AiFillStar } from 'react-icons/ai';
import ItemCardStore from '../../components/ItemCardStore';
import { useParams } from 'react-router-dom';
import { mockStores } from '../../mock/stores';

export default function Store () {
    const { code } = useParams();

    const store = mockStores.find(store => (code !== undefined && store.id.toString() === code));

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.banner} src={banner} alt='banner'/>
            </div>
            <div className={styles.info}>
                <div className={styles['container-logo']}>
                    <img className={styles.logo} src={store?.image} alt={store?.image}/>
                </div>
                <div className={styles.title}>
                    <h1>{store?.name} <span><AiFillStar/> {store?.note}</span></h1>
                </div>
            </div>
            <h2>Produtos</h2>
            <div className={styles.items}>
                {
                    store?.items.map(item => {
                        return (
                            <ItemCardStore 
                                name={item.name} 
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                key={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>    
    );
}