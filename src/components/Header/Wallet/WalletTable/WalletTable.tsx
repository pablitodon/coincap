
import { removeCoinFromWallet } from '../../../../redux/addCoinToWalletSlice';
import { useAppDispatch, useAppSelector } from '../../../../store';
import styles from './styles.module.css';


const WalletTable = () => {
    const coins = useAppSelector(state => state.addCoinToWallet);
    const dispatch = useAppDispatch()

    const handleDeleteCoin = (id: string): void => {
        dispatch(removeCoinFromWallet(id))
    }

    return (
        <>
            <table className={styles.wallet__table}>
                <thead>
                    <tr>
                        <th >Назване</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Итого</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        coins.map((coin) => {
                            return (
                                <tr key={coin.id}>
                                    <td>{coin.name}</td>
                                    <td>{Number(coin.price).toFixed(2)}$</td>
                                    <td>{coin.amount}</td>
                                    <td>{(Number(coin.price) * Number(coin.amount)).toFixed(2)}$</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button
                                            onClick={() => handleDeleteCoin(String(coin.id))}
                                            className={styles.delete__button}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default WalletTable;