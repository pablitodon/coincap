import styles from './styles.module.css'
import { useAppSelector } from '../../../store';
import { useGetHistotyCoinQuery } from '../../../services/coinCapApi';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const LineChartComponent = () => {
    const coinId = useAppSelector(state => state.dataCoinId.coinId);
    const { data: historyData } = useGetHistotyCoinQuery({ id: coinId!, interval: 'd1' }, { skip: coinId === null })

    const chartData = historyData?.data.map(item => ({
        date: new Date(item.time).toLocaleDateString(), // Форматируем дату
        price: item.priceUsd, // Цена USD
    }));

    return (
        <div className={styles.linechart}>
            {
                chartData && (
                    <LineChart width={700} height={200} data={chartData}>
                        <XAxis dataKey="date" style={{ fontSize: "10px" }} />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                )
            }
        </div >
    );
};

export default LineChartComponent;