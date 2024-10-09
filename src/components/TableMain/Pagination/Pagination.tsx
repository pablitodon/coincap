/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./styles.module.css"




interface Props {
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
}

const Pagination = ({ currentPage, setCurrentPage }: Props) => {
    const totalPages = 10;

    const handlePrevPage = (): void => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = (): void => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handlePrevPage()}
                disabled={currentPage === 1}
                className={styles.arrow}
            >
                {`<`}
            </button>
            {[...Array(totalPages)].map((_, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={styles.pageNumber}
                        disabled={index + 1 === currentPage}
                    >
                        {index + 1}
                    </button>
                )
            })}
            <button
                onClick={() => handleNextPage()}
                disabled={currentPage >= totalPages}
                className={styles.arrow}
            >
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;