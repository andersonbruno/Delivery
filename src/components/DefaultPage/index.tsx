import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './DefaultPage.scss';

export default function DefaultPage() {
    return (
        <div className='container'>
            <Navbar/>
            <div className='container-outlet'>
                <Outlet />
            </div>
            <div>
                <h1>teste</h1>
            </div>
        </div>
    )
}