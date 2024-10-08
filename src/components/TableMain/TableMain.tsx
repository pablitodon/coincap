import styles from './styles.module.css';
import Item from './CryptoItem/Item';
import { useGetCoinCapDataQuery } from '../../services/coinCapApi';

const TableMain = () => {

    const { data: dataCoins, error, isLoading } = useGetCoinCapDataQuery(null);



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>№0</th>
                    <th></th>
                    <th>Name</th>
                    <th>VWAP(24Hr)</th>
                    <th>Change(24Hr)</th>
                    <th>Market Cap</th>
                    <th>Price</th>
                    <th>pl</th>
                </tr>
            </thead>
            <tbody>
                <Item dataCoins={dataCoins && dataCoins.data} />
            </tbody>
        </table>
    );
};

export default TableMain;