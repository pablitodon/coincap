import { plusImage } from '../../../assets';
import { ICoinCap } from '../../../interfaces';
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { setCoinId } from '../../../redux/coinIdSlice';
import { showAndCloseModal } from '../../../redux/showModalSlice';

interface Props {
    dataCoins?: ICoinCap[];
    setCurrentCoin: (item: ICoinCap) => void;
}

const Item = ({ dataCoins, setCurrentCoin }: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleNavigateTo = (id: string): void => {
        dispatch(setCoinId(id));
        navigate(`/info/${id}`)
    }
    const handleOpenModal = (item: ICoinCap) => {
        dispatch(showAndCloseModal(true));
        setCurrentCoin(item)
    }

    return (
        <>
            {
                dataCoins?.map((item, index) => {
                    return (
                        <tr className={styles.item} key={item.id} onClick={() => handleNavigateTo(item.id)} >
                            <td className={styles.tdNumber}>{index + 1}</td>
                            <td className={styles.tdSymbol} >{item.symbol}</td>
                            <td className={styles.tdName}>{item.name}</td>
                            <td className={styles.tdVWAP}>{Number(item.vwap24Hr).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                            <td className={`${Number(item.changePercent24Hr) < 0 ? styles.text__red : styles.text__green}`}>
                                {Number(item.changePercent24Hr).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </td>
                            <td className={styles.tdVWAP}>{`${(Number(item.marketCapUsd) / 1000000000).toFixed(1)} млрд $`}</td>
                            <td className={styles.tdPrice}>{`${(Number(item.priceUsd).toFixed(2))}$`}</td>
                            <td onClick={(e) => e.stopPropagation()}>
                                <img
                                    onClick={() => handleOpenModal(item)}
                                    // onClick={() => handleGetInformForModal(item.name, item.priceUsd, item.id)}
                                    src={plusImage.plus}
                                    alt="plusik"
                                    width={25}
                                    height={20}
                                />
                            </td>
                        </tr >)
                })
            }
        </>
    );
};

export default Item;


// const handleGetInformForModal = (name: string, price: string, id: string) => {
//     dispatch(showAndCloseModal(true));
//     dispatch(setCoinId(id));
//     dispatch(addCoinToWallet({ name, price: Number(price), id })); // Преобразуем цену в число
//     document.body.style.overflow = 'hidden';
// }