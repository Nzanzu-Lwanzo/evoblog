import style from './style.module.css'
import FilterByTitle from './FilterByTitle'
import FilterByDate from './FilterByDate'
import { useAppContext } from '../../../contexts/AppContext'

const FilterAndSearch = () => {

    const ctx = useAppContext()

    let activeClassname = ctx?.showFilterAndSearchPanel && style.active

    return (
        <div className={`center ${style.panel} ${activeClassname}`}>
            <div className={style.card}>
                <div className={style.topbar}>
                    <input type="search" className={style.input} placeholder='Filtrez ou cherchez' />
                    <button type="button" className={style.search__button}>Chercher</button>
                </div>
                <div className={style.filter__buttons}>
                    <FilterByTitle />
                    <FilterByDate />
                </div>
            </div>
        </div>
    )
}

export default FilterAndSearch