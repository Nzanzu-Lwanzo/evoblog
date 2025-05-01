import style from './style.module.css'
import Article from './Article'
import { useReadPostContext } from '../../../contexts/ReadArticleContext'

const MoreArticles = () => {

    const ctx = useReadPostContext()

    return (
        <div className={style.list__articles}>
            {ctx?.post.morePosts.map((post) => {
                return <Article key={post._id} post={post} />
            })}
        </div>
    )
}

export default MoreArticles