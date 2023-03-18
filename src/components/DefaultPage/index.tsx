import { Outlet } from 'react-router-dom';
import Modal from '../Modal';
import Navbar from '../Navbar';
import styles from './DefaultPage.module.scss';

export default function DefaultPage() {
    return (
        <>
            <Modal/>
            <div className={styles.container}>
                <Navbar/>
                <div className={styles['container-outlet']}>
                    <Outlet />
                </div>
                <div>

                </div>
            </div>
        </>
    )
}