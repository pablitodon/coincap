import React from 'react';
import styles from './styles.module.css'



const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapperList}>
                <h5 className={styles.titleList} >Популярные криптовалюты:</h5>
                <ul className={styles.headerList}>
                    <li>Btc</li>
                    <li>Eth</li>
                    <li>Teth</li>
                </ul>
            </div>
            <div>
                Portf
            </div>
        </div >
    );
};

export default Header;