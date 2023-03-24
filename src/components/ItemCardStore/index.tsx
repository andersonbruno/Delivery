import { openModal } from '../../store/reducers/modal';
import styles from './ItemCardStore.module.scss';
import { useDispatch } from 'react-redux';

interface ItemProps {
    name: string;
    description: string;
    image: string;
    price: number;
    idItem: number;
    idStore: number;
}

export default function ItemCardStore (props: ItemProps) {
    const {name, description, image, price, idItem, idStore } = props;
    const dispatch = useDispatch();

    return (
        <div className={styles.container} onClick={() => dispatch(openModal({idItem, idStore}))}>
            <div className={styles.infos}>
                <div className={styles.title}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.info}>
                    <div>
                        {description}
                    </div>
                </div>
                <div className={styles.price}>
                    R$ {price.toFixed(2)}
                </div>
            </div>
            <div className={styles.image}>
                <img src={image} alt='Churrasco'/>
            </div>
        </div>
    );
}