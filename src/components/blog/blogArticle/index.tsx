import style from './style.module.css'
import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'
import Avatar from '../../__global__/avatar'
import { Post } from '../../../lib/@type'
import { formatDateTime } from '../../../lib/helpers'
import { buildImage } from '../../../backend/client'
import { Route as ReadBlogRoute } from '../../../routes/blog/read/$slug'


const BlogArticle = ({ post }: { post: Post }) => {
    return (
        <div className={style.blog__card}>
            <div className={style.meta__infos}>
                <Avatar img={{ src: buildImage(post.author.image) || '/img/user.jpg' }} />
                <p className={style.date}>par <span className={style.author__name}>{post.author.name}</span> le {formatDateTime(post._updatedAt)}</p>
            </div>
            <h4 className={style.title}>{post.title}</h4>
            <p className={style.introduction}>
                {post.description}
            </p>
            <Link to={ReadBlogRoute.to} params={{ slug: post.slug.current }} className={style.read__article}>
                <span>Lire cet article</span>
                <span className={`center ${style.icon}`}>
                    <MoveRight size={20} stroke='currentColor' />
                </span>
            </Link>
        </div>
    )
}

export default BlogArticle