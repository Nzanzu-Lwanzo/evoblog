import style from './style.module.css'
import MenuHamburger from '../menuHamburger'
import { useState } from 'react'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMenuAppearance = () => {
    setShowMobileMenu(prev => !prev)
  }

  return (
    <header className={style.header}>
      <div className={style.logo}></div>
      <nav className={`${style.navbar} ${showMobileMenu && style.active}`}>
        <a href="#" className={style.navlink}>Blog</a>
        <a href="#" className={style.navlink}>About</a>
        <a href="#" className={style.navlink}>Newsletter</a>
        <a href="#" className={style.navlink}>Contacts</a>
      </nav>
      <MenuHamburger showMenu={showMobileMenu} toggleMenuAppearance={toggleMenuAppearance} />
    </header>
  )
}

export default Header