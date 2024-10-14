
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../store';
import { showAndCloseModal } from '../../redux/showModalSlice';
import { useState } from 'react';
import { addCoinToWallet } from '../../redux/addCoinToWalletSlice';
import { ICoinCap } from '../../interfaces';

interface Props {
    currentCoin: ICoinCap | null;
}


const ModalBuyCoin = ({ currentCoin }: Props) => {
    const [amount, setAmountCoins] = useState<string>('');
    const dispatch = useAppDispatch();
    const showModal = useAppSelector(state => state.showModal.show);

    const handleCloseModal = () => {
        dispatch(showAndCloseModal(false));
        document.body.style.overflow = 'auto';
        setAmountCoins('')
    }

    const handleBuyCoin = () => {
        if (amount.trim() === '' || Number(amount) < 0) {
            alert('Введите корректное количество монет!');
            return;
        }
        document.body.style.overflow = 'auto';
        dispatch(addCoinToWallet({ name: currentCoin?.name, id: String(currentCoin?.id), price: currentCoin?.priceUsd, amount: Number(amount) }));
        dispatch(showAndCloseModal(false));
        setAmountCoins('');
    }


    return (
        <div>
            {
                showModal && (
                    <div className={`${styles.modal} ${showModal ? styles.show : ''}`}>
                        <div className={`${styles.modalContent} ${showModal ? styles.show : ''}`}>
                            <span onClick={() => handleCloseModal()} className={styles.close} >&times;</span>
                            <h1>Купить <strong>{currentCoin?.name}</strong></h1>
                            <h2 className={styles.labelInput}>Введите количество:</h2>
                            <input
                                className={styles.inputField}
                                type="number"
                                value={amount || ''}
                                onChange={(e) => setAmountCoins(e.target.value)}
                            />
                            <button disabled={+amount < 0.0001} onClick={() => handleBuyCoin()} className={styles.buyBtn}>Купить</button>
                        </div>
                    </div >)
            }
        </div>
    );
};

export default ModalBuyCoin;