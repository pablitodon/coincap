import styles from './styles.module.css';
import Item from '../CryptoItem/Item';
import { useGetCoinCapDataQuery } from '../../../services/coinCapApi';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';

const TableMain = () => {
    const { data: dataCoins, error, isLoading } = useGetCoinCapDataQuery(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;


    // PAGINATION
    // Вычисляем индекс последнего элемента на текущей странице
    const indexOfLastItem = currentPage * pageSize;
    // Вычисляем индекс первого элемента на текущей странице
    const indexOfFirstItem = indexOfLastItem - pageSize;
    // Получаем элементы для текущей страницы, используя индексы
    const currentsItems = dataCoins?.data.slice(indexOfFirstItem, indexOfLastItem)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    return (
        <>
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
                    <Item dataCoins={currentsItems} />
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
};

export default TableMain;