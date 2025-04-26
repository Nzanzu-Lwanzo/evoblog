import style from './style.module.css'
import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'
import Avatar from '../../__global__/avatar'

const BlogArticle = () => {
    return (
        <div className={style.blog__card}>
            <div className={style.meta__infos}>
                <Avatar img={{ src: '/img/user.jpg' }} />
                <p className={style.date}>par <span className={style.author__name}>Grace Kazingufu</span> le 13.12.2025</p>
            </div>
            <h4 className={style.title}>Comment protéger un stream de toute corruption</h4>
            <p className={style.introduction}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quia exercitationem quas expedita numquam nobis consequatur sed, vero ipsam vitae quos nihil veniam, obcaecati esse inventore labore delectus at. Numquam!
            </p>
            <Link to='/blog/read/[id]' params={{ id: 'clasdhfowuihdfoa' }} className={style.read__article}>
                <span>Lire cet article</span>
                <span className={`center ${style.icon}`}>
                    <MoveRight size={20} stroke='currentColor' />
                </span>
            </Link>
        </div>
    )
}

export default BlogArticle