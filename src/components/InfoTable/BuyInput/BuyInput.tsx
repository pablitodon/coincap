import styles from './styles.module.css'


interface Props {
    name: string;
    symbol: string
}
const BuyInput = ({ name, symbol }: Props) => {

    return (
        <section className={styles.buyInput}>
            <div className={styles.coinHeader}>
                <h2 className={styles.name}>{name}</h2>
                <h2 className={styles.symbol}>{symbol}</h2>
            </div>
            <div className={styles.inputContainer}>
                <span className={styles.inputLabel}>Введите количество:</span>
                <input type="text" className={styles.inputField} />
                <button className={styles.buyButton}>Купить</button>
            </div>
        </section>
    );
};

export default BuyInput;