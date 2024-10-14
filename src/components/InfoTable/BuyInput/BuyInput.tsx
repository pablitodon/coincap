import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import styles from './styles.module.css'
import { addCoinToWallet } from '../../../redux/addCoinToWalletSlice';


interface Props {
    name: string;
    symbol: string;
    id: string;
    price: string;
}

const BuyInput = ({ name, symbol, id, price }: Props) => {
    const [amount, setAmount] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleBuyCoin = () => {
        if (amount.trim() === '' || Number(amount) < 0) {
            alert('Введите корректное количество монет!');
            return;
        }

        dispatch(addCoinToWallet({ name, id, price, amount: Number(amount) }));
        setAmount('');
        alert("Монета куплена!Проверьте свой кошелек!");
    }



    return (
        <section className={styles.buyInput}>
            <div className={styles.coinHeader}>
                <h2 className={styles.name}>{name}</h2>
                <h2 className={styles.symbol}>{symbol}</h2>
            </div>
            <div className={styles.inputContainer}>
                <span className={styles.inputLabel}>Введите количество:</span>
                <input
                    type="number"
                    className={styles.inputField}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button
                    disabled={amount.trim() === ''}
                    onClick={() => handleBuyCoin()}
                    className={styles.buyButton}
                >
                    Купить
                </button>
            </div>
        </section>
    );
};

export default BuyInput;