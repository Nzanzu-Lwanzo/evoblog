import style from './style.module.css'
import MenuHamburger from '../menuHamburger'
import { useCallback, useState } from 'react'
import { Link } from '@tanstack/react-router'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMenuAppearance = () => {
    setShowMobileMenu(prev => !prev)
  }

  const onNavigation = useCallback(() => setShowMobileMenu(false), [])

  return (
    <header className={style.header}>
      <div className={style.logo}></div>
      <nav className={`${style.navbar} ${showMobileMenu && style.active}`}>
        <Link to="/" className={style.navlink} onClick={onNavigation}>Acceuil</Link>
        <Link to="/post/read/[id]" params={{ id: "bfou-dasdfwd-sda" }} className={style.navlink} onClick={onNavigation}>Blog</Link>
        <Link to="/" className={style.navlink} onClick={onNavigation}>Newsletter</Link>
        <Link to="/" className={style.navlink} onClick={onNavigation}>Contacts</Link>
      </nav>
      <MenuHamburger showMenu={showMobileMenu} toggleMenuAppearance={toggleMenuAppearance} />
    </header>
  )
}

export default Header