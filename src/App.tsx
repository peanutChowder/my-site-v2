import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.header}>
                <span className={styles.nav}>
                    <p>Jacob Feng</p>
                    <a href="/" className={styles['header-links']}>
                        My Timeline{' '}
                    </a>
                    <a href="/" className={styles['header-links']}>
                        Link
                    </a>
                </span>
            </header>
        </div>
    );
}

export default App;
