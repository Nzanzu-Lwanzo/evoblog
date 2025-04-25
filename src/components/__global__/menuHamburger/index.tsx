import style from './style.module.css'

export interface MenuHamburgerProps {
    toggleMenuAppearance: () => void;
    showMenu: boolean
}

const MenuHamburger = ({ toggleMenuAppearance, showMenu }: MenuHamburgerProps) => {
    return (
        <div className={style.mobile__menu}>
            <button
                className={`${style.btn} ${style.menu__btn} ${showMenu ? style.active : ''} center`}
                onClick={toggleMenuAppearance}>
                <div className={`${style.bar} ${style.bar__1}`}></div>
                <div className={`${style.bar} ${style.bar__2}`}></div>
                <div className={`${style.bar} ${style.bar__3}`}></div>
            </button>
        </div>
    )
}

export default MenuHamburger