import style from './style.module.css'
import BlogArticle from './blogArticle'
import { useGetPosts } from '../../lib/hooks/post'
import BlogLoadingSkeleton from './blogLoadingSkeleton'
import { fakeList } from '../../lib/helpers'

const BlogLister = () => {

    const { data, isFetching } = useGetPosts()

    return (
        <section className={style.blog__lister}>
            {isFetching ? (
                <>
                    {fakeList.map(() => {
                        return <BlogLoadingSkeleton />
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