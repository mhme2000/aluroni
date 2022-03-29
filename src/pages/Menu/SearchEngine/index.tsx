import styles from './SearchEngine.module.scss';
import { CgSearch } from 'react-icons/cg';
import React from 'react';

interface SearchEngineProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchEngineProps) {
    return (
        <div className={styles.searchEngine}>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            <CgSearch size={20} color='#4c4d4e' />
        </div>

    )
}