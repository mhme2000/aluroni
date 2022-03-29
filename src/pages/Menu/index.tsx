import styles from './Menu.module.scss';
import logo from '../../assets/logo.svg';
import SearchEngine from './SearchEngine';
import { useState } from 'react';
import Filters from './Filters';

export default function Menu() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="image logo aluroni" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The house of code and mass
                </div>
            </header>
            <section className={styles.list}>
                <h3 className={styles.list__title}>
                    List
                </h3>
                <SearchEngine search={search} setSearch={setSearch} />
                <div className={styles.list__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                </div>
            </section>
        </main>
    );
}

