import style from './style.module.css'
import ActionsOnArticle from './ActionsOnArticle'
import { Post } from '../../../lib/@type'
import { buildImage } from '../../../backend/client'
import { PortableText } from '@portabletext/react'

const ArticleContent = ({ post }: { post: Post }) => {

    return (
        <article className={style.article}>
            <h2 id='intro'>Introduction</h2>
            <p>
                {post.description}
            </p>

            {post.image && <img src={buildImage(post.image)} />}

            <PortableText value={post.content} />

            <ActionsOnArticle />
        </article>
    )
}

export default ArticleContent