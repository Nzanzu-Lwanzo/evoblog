import style from './style.module.css'
import SwitchTheme from '../swicthTheme'
import { BLOG_OWNER_DATA } from '../../../lib/enums'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <p>Built with love and <a target="_blank" href="https://youtu.be/iykvtX_ptyg?si=Trpl08IF0XktPHQ6" className={style.link__text}>rap music</a> by <a href={BLOG_OWNER_DATA.GITHUB} className={style.link__text}>Nzanzu Lwanzo</a></p>
            </div>
            <div>
                <SwitchTheme />
            </div>
        </footer>
    )
}

export default Footer