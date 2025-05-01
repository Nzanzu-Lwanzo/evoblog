import style from './style.module.css'
import ActionsOnArticle from './ActionsOnArticle'
import { buildImage } from '../../../backend/client'
import { PortableText } from '@portabletext/react'
import { useReadPostContext } from '../../../contexts/ReadArticleContext'

const ArticleContent = () => {

    const ctx = useReadPostContext()

    return (
        <article className={style.article}>
            <h2 id='intro'>Introduction</h2>
            <p>
                {ctx?.post.description}
            </p>

            {ctx?.post.image && <img src={buildImage(ctx.post.image)} />}

            <PortableText value={ctx?.post.content || []} />

            <ActionsOnArticle />
        </article>
    )
}

export default ArticleContent