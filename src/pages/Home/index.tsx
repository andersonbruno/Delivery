import Item from '../../components/Store';
import './Home.scss';

export default function Home () {
    return (
        <div className='header'>
            <h3>Lojas</h3>
            <div className='lojas'>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}