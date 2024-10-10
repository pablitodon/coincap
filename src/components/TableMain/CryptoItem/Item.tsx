import { plusImage } from '../../../assets';
import { ICoinCap } from '../../../interfaces';
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { setCoinId } from '../../../redux/coinIdSlice';



interface Props {
    dataCoins?: ICoinCap[]
}

const Item = ({ dataCoins }: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const handleNavigateTo = (id: string): void => {
        dispatch(setCoinId(id));
        navigate(`/info/${id}`)
    }

    return (
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
                            onClick={() => console.log('plus')}
                            src={plusImage.plus}
                            alt="plusik"
                            width={20}
                            height={20}
                        />
                    </td>
                </tr >)
        })
    );
};

export default Item;