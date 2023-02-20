import './Busca.scss';
import { RiSearchLine } from "react-icons/ri";

export default function Busca() {
    return (
        <div className='buscaInput'>
            <RiSearchLine className='icone'/>
            <input 
                placeholder="Busque por um produto"
                className="input"
            />
        </div>
    )
}