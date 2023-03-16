import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import styles from './DefaultPage.module.scss';

export default function DefaultPage() {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <div>
                <h1>teste</h1>
            </div>
        </div>
    )
}