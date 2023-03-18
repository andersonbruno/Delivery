import styles from './Modal.module.scss';
import coca from '../../assets/itens/coca.png';
import { RiCloseLine, RiStore3Fill, RiSubtractLine, RiAddLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import classNames from 'classnames';

export default function Modal () {
    const [ quantity, setQuantity ] = useState(1);

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles['modal-image']}>
                    <img src={coca} alt={'coca'}/>
                </div>
                <div className={styles['modal-infos']}>
                    <div className={styles['modal-header']}>
                        <div className={styles['modal-title']}>1021 - PASTEL DE CARNE DE SOL</div>
                        <div className={styles['modal-close']}><RiCloseLine/></div>
                    </div>
                    <div className={styles['modal-content']}>
                        <div className={styles['modal-description']}>Coca cola 350 ml</div>
                        <div className={styles['modal-price']}>R$ 6,00</div>
                        <div className={styles['modal-store']}>
                            <div className={styles['modal-store-header']}>
                                <div className={styles['modal-store-name']}>
                                    <span><RiStore3Fill/></span> Miguel empanadas
                                </div>
                                <div className={styles['modal-store-note']}>
                                    <AiFillStar/> 4.7
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles['modal-store-price']}>
                                41-51 min  <span>•</span>  RS 5,00
                            </div>
                        </div>
                        <div className={styles['modal-store-comment']}>
                            <span>Algum comentário?</span>
                            <textarea maxLength={140} rows={3}></textarea>
                        </div>
                    </div>
                    <div className={styles['modal-action']}>
                        <div className={styles['quantity-content']}>
                            <div>
                                <button 
                                    className={classNames(styles['quantity-button'] , { [styles['quantity-button-not-allow']]: quantity === 1 })} 
                                    onClick={() => setQuantity(quantity !== 1 ? quantity - 1 : quantity)}>
                                    <RiSubtractLine/>
                                </button>
                            </div>
                            <div className={styles['quantity-value']}>{quantity}</div>
                            <div>
                                <button className={styles['quantity-button']} onClick={() => setQuantity(quantity + 1)}>
                                    <RiAddLine/>
                                </button>
                            </div>
                        </div>
                        <button className={styles['button-add']}>
                            <div className={styles['button-content']}>
                                <span>Adicionar</span>
                                <span>R$ 10,00</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}