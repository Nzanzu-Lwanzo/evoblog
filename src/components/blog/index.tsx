import style from './style.module.css'
import BlogArticle from './blogArticle'
import { useGetPosts } from '../../lib/hooks/post'
import CardLoadingSkeleton from '../__global__/cardLoadingSkeleton'
import { fakeList } from '../../lib/helpers'

const BlogLister = () => {

    const { data, isFetching } = useGetPosts()

    return (
        <section className={style.blog__lister}>
            {isFetching ? (
                <>
                    {fakeList.map(() => {
                        return <CardLoadingSkeleton />
                    })}
                </>
            ) : (
                <>
                    {data?.map((post) => {
                        return <BlogArticle key={post._id} post={post} />
                    })}
                </>
            )}
        </section>
    )
}

export default BlogLister