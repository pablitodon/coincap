import styles from './styles.module.css'
import { useGetCoinCapDataQuery } from '../../../services/coinCapApi';
import BriefCase from '../Briefcase/Briefcase/Briefcase';



const Header = () => {

    const { data: dataCoins } = useGetCoinCapDataQuery(null);
    const currentsItems = dataCoins?.data.slice(0, 3)

    return (
        <div className={styles.header}>
            <div className={styles.wrapperList}>
                <h5 className={styles.titleList} >Популярные криптовалюты:</h5>
                <ul className={styles.headerList}>
                    {
                        currentsItems?.map(coin => (
                            <li key={coin.id}>
                                <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{coin.name}</span>
                                <p style={{ color: "rgb(227, 18, 11)" }} >{`${(Number(coin.priceUsd).toFixed(2))}$`}</p>
                            </li>
                        ))
                    }
                </ul>
            </div >
            <div>
                <BriefCase />
            </div>
        </div >
    );
};

export default Header;