import classNames from 'classnames';
import styles from './ItemCard.module.scss';

interface ItemCardProps {
    image: string;
    name: string;
    price: number;
}

export default function ItemCard ({ image, name, price}: ItemCardProps) {
    return (
        <div className={classNames(styles.container, styles.grow)}>
            <div className={styles.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.price}>
                R$ {price}
            </div>
        </div>
    )
}