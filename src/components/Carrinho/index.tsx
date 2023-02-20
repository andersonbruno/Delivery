import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import './Carrinho.scss';

export default function Carrinho() {
    return (
        <div className={classNames('carrinho', {
            'carrinhoComItem': true
        })}>
            <RiHandbagLine className='iconeCarrinho'/>
            <div className='carrinhoValor'>
                <div>R$ 0,00</div>
                <div>0 Itens</div>
            </div>
        </div>
    )
}