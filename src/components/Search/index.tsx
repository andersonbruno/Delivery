import './Search.scss';
import { RiSearchLine } from "react-icons/ri";

export default function Search() {
    return (
        <div className='searchInput'>
            <RiSearchLine className='search-icon'/>
            <input 
                placeholder="Busque por um produto"
                className="search-input"
            />
        </div>
    )
}