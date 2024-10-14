import { useEffect, useState } from "react";
import { showAndCloseWallet } from "../../../../redux/showWalletSlice";
import { useAppDispatch, useAppSelector } from "../../../../store";
import Wallet from "../../Wallet/Wallet/Wallet";
import SvgComponent from "./SvgComponent";
import styles from './styles.module.css'




const BriefCase = () => {
    const dispatch = useAppDispatch();
    const walletPrice = useAppSelector(state => state.addCoinToWallet);

    const defaultWalletValue = localStorage.getItem('defaultWallet');
    const defaultValue: number = defaultWalletValue !== null ? JSON.parse(defaultWalletValue) : 0;

    const wallet: string = Array.isArray(walletPrice) ?
        walletPrice.reduce((acc, item) => acc + (Number(item.price) * Number(item.amount)), 0).toFixed(2)
        : '0.00';

    const [diffWallet, setDiffWallet] = useState<number>(0);
    const [percent, setPercent] = useState<number | string>(0);



    useEffect(() => {
        const currentWalletValue = Number(wallet);

        const difference = currentWalletValue - defaultValue;
        setDiffWallet(difference);
        if (currentWalletValue === 0) {
            setDiffWallet(0);
            setPercent(0);
            localStorage.removeItem('defaultWallet')
            localStorage.removeItem('wallet')
        } else {
            // const calculatedPercent = currentWalletValue > 0 ? ((((currentWalletValue - defaultValue) / currentWalletValue) * 100)).toFixed(2) : 0;
            const calculatedPercent = defaultValue > 0 ? ((((currentWalletValue - defaultValue) / defaultValue) * 100)).toFixed(2) : 0;
            setPercent(calculatedPercent);
        }
    }, [wallet, defaultValue]);

    return (
        <div className={styles.header}>
            <div className={styles.walletIcon} onClick={() => dispatch(showAndCloseWallet(true))}>
                <SvgComponent />
            </div>
            <div className={styles.briefcaseInfo}>
                <span>Итого:</span>
                <p>{Number(wallet).toFixed(2)} USD</p>
                <p>{diffWallet >= 0 ? ` +${diffWallet.toFixed(2)}` : ` ${diffWallet.toFixed(2)}`} </p>
                <p> ({percent}%) </p>
            </div>
            <Wallet />
        </div>
    );

};

export default BriefCase;



