import './Search.scss';
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();

    function searchItem(event: React.KeyboardEvent<HTMLInputElement> ): void {
        if (event.key === 'Enter' && event.currentTarget.value !== '')
            navigate('/search/' + event.currentTarget.value);
    }

    return (
        <div className='searchInput'>
            <RiSearchLine className='search-icon'/>
            <input 
                placeholder="Busque por um produto ou loja"
                className="search-input"
                onKeyDown={(e) => searchItem(e)}
            />
        </div>
    )
}