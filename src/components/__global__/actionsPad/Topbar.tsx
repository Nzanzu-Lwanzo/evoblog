import { ActionPadSection, useActionsPadContext } from '../../../contexts/ActionsPadContext'
import style from './style.module.css'
import { MessageSquareText, ThumbsUp, Pin } from 'lucide-react'
import HidePadOnSm from './HidePadOnSm'

const Topbar = () => {

    const ctx = useActionsPadContext();

    const switchToSection = (section: ActionPadSection) => ctx?.setCurrentActionPadSection(section)

    return (
        <div className={style.topbar}>
            <div className={style.actions}>
                <button
                    type="button"
                    className={`${style.nav__action} ${ctx?.currentActionPadSection == "bookmarks" && style.active}`}
                    onClick={() => switchToSection('bookmarks')}>
                    <Pin size={20} stroke='currentColor' />
                </button>

                <button
                    type="button"
                    className={`${style.nav__action} ${ctx?.currentActionPadSection == "likes" && style.active}`}
                    onClick={() => switchToSection('likes')}>
                    <ThumbsUp size={20} stroke='currentColor' />
                </button>

                <button
                    type="button"
                    className={`${style.nav__action} ${ctx?.currentActionPadSection == "comments" && style.active}`}
                    onClick={() => switchToSection('comments')}>
                    <MessageSquareText size={20} stroke='currentColor' />
                </button>
            </div>
            <HidePadOnSm />
        </div>
    )
}

export default Topbar