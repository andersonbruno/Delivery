import StoreCard from '../../components/StoreCard';
import StoreCardItem from '../../components/StoreCardItem';
import './Home.scss';
import bonarabe from '../../assets/itens/bonarabe.png';
import arnaldo from '../../assets/itens/arnaldo.jpg';
import mc from '../../assets/itens/MC.jpg';
import ouroroxo from '../../assets/itens/ouroroxo.jpg';
import Item from '../../components/Item';
import churrasco from '../../assets/itens/churrasco.png';
import parmegiana from '../../assets/itens/parmegiana.png';
import spaten from '../../assets/itens/spaten.jpg';

export default function Home () {
    return (
        <div className='header'>
            <h3>Loja Item</h3>
            <div className=''>
                <StoreCardItem
                    name='Churrascaria do arnaldo' 
                    note='5.0' 
                    timeToDeliver='30-40' 
                    category='Brasileira' 
                    image={arnaldo}
                />
            </div>
            <h3>Lojas</h3>
            <div className='stores'>
                <StoreCard 
                    name='Churrascaria do arnaldo' 
                    note='5.0' 
                    timeToDeliver='30-40' 
                    category='Brasileira' 
                    image={arnaldo}
                />
                <StoreCard 
                    name='Bonárabe - Parnamirim' 
                    note='4.5' 
                    timeToDeliver='30-40' 
                    category='Lanches' 
                    image={bonarabe}
                />
                <StoreCard 
                    name="Mcdonald's" 
                    note='4.9' 
                    timeToDeliver='30-40' 
                    category='Lanches' 
                    image={mc}
                />
                <StoreCard 
                    name='Ouro Roxo Açaíteria' 
                    note='3.5' 
                    timeToDeliver='30-40' 
                    category='Lanches' 
                    image={ouroroxo}
                />
            </div>
            <h3>Produtos</h3>
            <div className='items'>
                <Item 
                    name='Combo mistão (serve 4 pessoas) + Guaraná 2litros' 
                    description='Carne, frango e linguiça. Acompanha arroz de leite, feijão verde, farofa, Vinagrete, macaxeira cozida, macarrão, pirão de queijo.'
                    image={churrasco}
                    price='138,00'
                />
                <Item 
                    name='Combo parmegiana (serve 4 pessoas) + Guaraná 2 litros' 
                    description='Filé de carne ou frango empanado. Acompanha macarrão ao molho de tomate.'
                    image={parmegiana}
                    price='128,00'
                />
                <Item 
                    name='Spaten log nek 10 unidade' 
                    description='Spaten'
                    image={spaten}
                    price='105,50'
                />
            </div>
        </div>
    )
}