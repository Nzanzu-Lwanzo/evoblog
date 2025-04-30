import style from './style.module.css'
import Article from './Article'
import { Post } from '../../../lib/@type'

const MoreArticles = ({ posts }: { posts: Post[] }) => {
    return (
        <div className={style.list__articles}>
            {posts.map((post) => {
                return <Article key={post._id} post={post} />
            })}
        </div>
    )
}

export default MoreArticles