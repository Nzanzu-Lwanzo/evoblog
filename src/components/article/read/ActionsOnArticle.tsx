import style from './style.module.css'
import { ThumbsUp, MessageSquareText, Share2, Bookmark } from 'lucide-react'

const ActionsOnArticle = () => {
    return (
        <div className={style.actions__on__article}>
            <a href="https://youtu.be/rseqmSGH7xk?si=VSniT51Qme_88SB2" className={`center ${style.action}`}>
                <ThumbsUp size={20} stroke='currentColor' />
            </a>
            <button className={`center ${style.action}`}>
                <MessageSquareText size={20} stroke='currentColor' />
            </button>
            <button className={`center ${style.action}`}>
                <Share2 size={20} stroke='currentColor' />
            </button>
            <a href="#" className={`center ${style.action}`}>
                <Bookmark size={20} stroke='currentColor' />
            </a>
        </div>
    )
}

export default ActionsOnArticle