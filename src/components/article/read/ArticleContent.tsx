import style from './style.module.css'
import ActionsPad from '../../__global__/actionsPad'
import { buildImage } from '../../../backend/client'
import { PortableText } from '@portabletext/react'
import { useReadPostContext } from '../../../contexts/ReadArticleContext'

const ArticleContent = () => {

    const ctx = useReadPostContext()

    return (
        <article className={style.article}>
            {ctx?.post.image && <img src={buildImage(ctx.post.image)} />}

            <PortableText value={ctx?.post.content || []} />

            <ActionsPad />
        </article>
    )
}

export default ArticleContent