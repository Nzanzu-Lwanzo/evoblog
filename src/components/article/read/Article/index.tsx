import style from './style.module.css'
import Avatar from '../../../__global__/avatar'
import { Post } from '../../../../lib/@type'
import { buildImage } from '../../../../backend/client'
import { formatDateTime } from '../../../../lib/helpers'
import { Link } from '@tanstack/react-router'
import { Route as ReadBlogRoute } from '../../../../routes/blog/read/$slug'

const Article = ({ post }: { post: Post }) => {
    return (
        <div className={style.article__card}>
            <h3 className={style.title}>{post.title}</h3>
            <Link
                to={ReadBlogRoute.to}
                params={{ slug: post.slug.current }}
                className={style.link__to__read}
            >{post.description}</Link>
            <div className={style.meta__infos}>
                <Avatar img={{ src: buildImage(post.author.image) }} dims={30} />
                <p>par {post.author.name} | le {formatDateTime(post._updatedAt)}</p>
            </div>
        </div>
    )
}

export default Article