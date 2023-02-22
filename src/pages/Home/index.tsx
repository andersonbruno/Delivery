import Store from '../../components/Store';
import './Home.scss';
import bonarabe from '../../assets/itens/bonarabe.png';
import arnaldo from '../../assets/itens/arnaldo.jpg';
import mc from '../../assets/itens/MC.jpg';
import ouroroxo from '../../assets/itens/ouroroxo.jpg';

export default function Home () {
    return (
        <div className='header'>
            <h3>Lojas</h3>
            <div className='stores'>
                <Store name='Churrascaria do arnaldo' note='5.0' timeToDeliver='30-40' category='Brasileira' image={arnaldo}/>
                <Store name='Bonárabe - Parnamirim' note='4.5' timeToDeliver='30-40' category='Lanches' image={bonarabe}/>
                <Store name="Mcdonald's" note='4.9' timeToDeliver='30-40' category='Lanches' image={mc}/>
                <Store name='Ouro Roxo Açaíteria' note='3.5' timeToDeliver='30-40' category='Lanches' image={ouroroxo}/>
            </div>
        </div>
    )
}