import styles from './styles.module.css'

import { useAppDispatch, useAppSelector } from '../../../../store';
import { showAndCloseWallet } from '../../../../redux/showWalletSlice';
import WalletTable from '../WalletTable/WalletTable';


const Wallet = () => {
    const dispatch = useAppDispatch()
    const showWallet = useAppSelector(state => state.showWallet.show);
    const walletPrice = useAppSelector(state => state.addCoinToWallet);


    const totalPrice: string = Array.isArray(walletPrice) ?
        walletPrice.reduce((acc, item) => acc + (Number(item.price) * Number(item.amount)), 0).toFixed(2)
        : '0.00';


    const handleCloseModal = () => {
        dispatch(showAndCloseWallet(false));
        document.body.style.overflow = 'auto';
    };

    return (
        showWallet && (
            <div className={`${styles.wallet} ${showWallet ? styles.show : ''}`}>
                <div className={`${styles.walletContent} ${showWallet ? styles.show : ''}`}>
                    <span onClick={handleCloseModal} className={styles.close} >&times;</span>
                    <h2>Кошелёк</h2>
                    <WalletTable />
                    <p>
                        Итого: {totalPrice || 0} USD
                    </p>
                </div>
            </div>)
    );
};

export default Wallet;