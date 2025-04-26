import style from './style.module.css'
import MenuHamburger from '../menuHamburger'
import { useCallback, useState } from 'react'
import { Link } from '@tanstack/react-router'
import Avatar from '../avatar'
import { Search } from 'lucide-react'
import { useAppContext } from '../../../contexts/AppContext'

const Header = () => {

  const ctx = useAppContext()

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMenuAppearance = () => {
    setShowMobileMenu(prev => !prev)
  }

  const onNavigation = useCallback(() => setShowMobileMenu(false), [])

  const showFilterAndSearchPanel = useCallback(() => ctx?.setShowFilterAndSearchPanel(true), [ctx?.showFilterAndSearchPanel])

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Avatar img={{ src: '/img/logo.jpeg' }} dims={55} />
        <span style={{ fontWeight: "bold" }}>Wesside</span>
      </div>
      <nav className={`${style.navbar} ${showMobileMenu && style.active}`}>
        <Link to="/" className={style.navlink} onClick={onNavigation}>Acceuil</Link>
        <Link to="/blog/list" className={style.navlink} onClick={onNavigation}>Blog</Link>
        <Link to="/sample/[slug]" params={{ slug: 'post-slug' }} className={style.navlink} onClick={onNavigation}>Samples</Link>
        <Link to="/auth/signup" className={style.navlink} onClick={onNavigation}>Compte</Link>
      </nav>
      <div className={style.actions}>
        <button type="button" className={`center ${style.search__and__filter}`} onClick={showFilterAndSearchPanel}>
          <Search size={25} stroke='currentColor' />
        </button>
        <MenuHamburger showMenu={showMobileMenu} toggleMenuAppearance={toggleMenuAppearance} />
      </div>
    </header>
  )
}

export default Header