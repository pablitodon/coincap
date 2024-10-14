import { useNavigate } from 'react-router-dom';
import { useGetCoinInfoQuery } from '../../../services/coinCapApi';
import BuyInput from '../BuyInput/BuyInput';
import styles from './styles.module.css';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store';
import LineChartComponent from '../LineChart/LineChart';

const InfoTable = () => {
    const coinId = useAppSelector(state => state.dataCoinId.coinId);
    const { data: dataCoin, error, isLoading } = useGetCoinInfoQuery(coinId || null, { skip: !coinId });
    const coinInfo = dataCoin?.data;
    const navigate = useNavigate();

    // Прокручиваем страницу вниз через 500 мс после монтирования компонента
    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({ top: 140, behavior: 'smooth' });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleBackMainPage = () => navigate('/');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div className={styles.container}>
            {coinInfo && (
                <div>
                    <BuyInput
                        name={coinInfo.name}
                        symbol={coinInfo.symbol}
                        id={coinInfo.id}
                        price={coinInfo.priceUsd}
                    />
                    <table className={styles.tableInfo}>
                        <thead>
                            <tr>
                                <th>Информация</th>
                                <th>Данные о валюте</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.align__left}>Цена:</td>
                                <td>{`${Number(coinInfo.priceUsd).toFixed(2)}$`}</td>
                            </tr>
                            <tr>
                                <td>Доступное предложение для торговли:</td>
                                <td>{`${(Number(coinInfo.supply) / 1_000_000).toFixed(2)} млн.`}</td>
                            </tr>
                            <tr>
                                <td>Общее кол-во выпущенных активов:</td>
                                <td>{coinInfo.maxSupply ? `${(Number(coinInfo.maxSupply) / 1_000_000).toFixed(2)} млн.` : 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Объем торгов за последние 24 часа:</td>
                                <td>{`${(Number(coinInfo.volumeUsd24Hr) / 1_000_000_000).toFixed(2)} млрд.`}</td>
                            </tr>
                            <tr>
                                <td>Средняя цена по объему за последние 24 часа:</td>
                                <td>{Number(coinInfo.vwap24Hr).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Процентное изменение за последние 24 часа:</td>
                                <td className={`${Number(coinInfo.changePercent24Hr) < 0 ? styles.text__red : styles.text__green}`}>
                                    {`${Number(coinInfo.changePercent24Hr).toFixed(2)} %`}
                                </td>
                            </tr>
                            <tr>
                                <td>Сайт:</td>
                                <td>
                                    <div className={styles.linkContainer}>
                                        <a href={coinInfo.explorer} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            {coinInfo.explorer}
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <LineChartComponent />
            <div className={styles.buttonContainer}>
                <button className={styles.buttonBack} onClick={handleBackMainPage}>
                    Назад
                </button>
            </div>
        </div>
    );
};

export default InfoTable;