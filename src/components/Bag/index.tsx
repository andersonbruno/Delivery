import classNames from "classnames";
import { RiHandbagLine } from "react-icons/ri";
import './Bag.scss';

export default function Bag() {
    return (
        <div className={classNames('bag', {
            'bag-with-item': true
        })}>
            <RiHandbagLine className='bag-icon'/>
            <div className='bag-value'>
                <div>R$ 0,00</div>
                <div>0 Itens</div>
            </div>
        </div>
    )
}