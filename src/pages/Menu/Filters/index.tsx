import React from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';

const filters = [
    {
        "label": "Massas",
        "id": 1
    },
    {
        "label": "Carnes",
        "id": 2
    },
    {
        "label": "Combos",
        "id": 3
    },
    {
        "label": "Veganos",
        "id": 4
    }
]

type IFilter = typeof filters[0];

interface FiltersProps {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: FiltersProps) {
    function selectFilter(filterSelected: IFilter) {
        if(filterSelected.id === filter) return setFilter(null);
        setFilter(filterSelected.id);
    }
    return (
    <div className={styles.filters}>
        {filters.map((filterOption: IFilter) => (
            <button className={classNames({[styles.filters__filter] : true , [styles["filters__filter--active"]] : filterOption.id === filter})} key={filterOption.id} onClick={() => selectFilter(filterOption)}>
                {filterOption.label}
            </button>
        ))}
    </div>
    );
}