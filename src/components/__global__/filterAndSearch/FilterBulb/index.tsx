import { JSX } from 'react';
import style from './style.module.css'

interface FilterBulbPropsType {
    label: string;
    icon: JSX.Element
}


const FilterBulb = ({ label, icon }: FilterBulbPropsType) => {
    return (
        <div className={style.bulb}>
            <span>{label}</span>
            <span className="center">
                {icon}
            </span>
        </div>
    )
}

export default FilterBulb