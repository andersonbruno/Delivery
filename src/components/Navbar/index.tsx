import { Link, useLocation } from 'react-router-dom';
import Busca from '../Search';
import Carrinho from '../Bag';
import styles from './Navbar.module.scss';
import classnames from 'classnames';

export default function Navbar() {
    const location = useLocation();
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                Delivery
            </div>
            <div className={styles.links}>
                <Link to='/' className={classnames(styles.link, {
                    [styles.selected]: location.pathname === '/' || location.pathname.includes('/search/')
                })}>
                    Início
                </Link>
                <Link to='/' className={styles.link}>Restaurante</Link> 
                <Link to='/' className={styles.link}>Mercado</Link> 
                <Link to='/' className={styles.link}>Farmácia</Link> 
            </div>
            <div className='busca'>
                <Busca/>
            </div>
            <div className='icones'>
                <Carrinho/>
            </div>
        </div>
    )
}