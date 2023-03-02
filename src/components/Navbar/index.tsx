import { Link, useLocation } from 'react-router-dom';
import Busca from '../Search';
import Carrinho from '../Bag';
import './Navbar.scss';
import classnames from 'classnames';

export default function Navbar() {
    const location = useLocation();
    return (
        <div className='nav'>
            <div className='logo'>
                Delivery
            </div>
            <div className='links'>
                <Link to='/' className={classnames('link', {
                    'selected': location.pathname === '/' || location.pathname.includes('/search/')
                })}>
                    Início
                </Link>
                <Link to='/' className='link'>Restaurante</Link> 
                <Link to='/' className='link'>Mercado</Link> 
                <Link to='/' className='link'>Farmácia</Link> 
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