// import ModalBuyCoin from '../../components/ModalBuyCoin/ModalBuyCoin';
import { useEffect } from 'react';
import TableMain from '../../components/TableMain/Table/TableMain';
import { useAppSelector } from '../../store';

const Main = () => {
    const wallet = useAppSelector(state => state.addCoinToWallet);

    const defaultCoinWallet = wallet.reduce((acc, item) => {
        return acc + (Number(item.price) * Number(item.amount));
    }, 0).toFixed(2);
    const saveToLocalStorage = () => {
        localStorage.setItem('defaultWallet', JSON.stringify(defaultCoinWallet));
    };
    useEffect(() => {
        const handleBeforeUnload = () => {
            saveToLocalStorage();
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [wallet]);


    return (
        <main>
            <TableMain />
        </main>
    );
};

export default Main;  