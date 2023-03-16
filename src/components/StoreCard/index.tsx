import styles from './StoreCard.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

interface StoreProps {
    id: number;
    name: string;
    category: string;
    image: string;
    note: string;
    timeToDeliver: number;
}

export default function StoreCard (props: StoreProps) {
    const { id, name, category, image, note, timeToDeliver } = props;
    const navigate = useNavigate();

    return (
        <div className={classNames(styles.container, styles.grow)} onClick={() => navigate('/store/' + id)}>
            <div className={styles.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.infos}>
                <div className={classNames(styles.info, styles.title)}>{name}</div>
                <div className={styles.info}>
                    <div className={classNames(styles.star, styles.note)}><AiFillStar/></div>
                    <div className={styles.note}>{note}</div>
                    <div className={styles.category}> • {category}</div>
                </div>
                <div className={styles.info}>{timeToDeliver} minutos</div>
            </div>
        </div>
    )
}