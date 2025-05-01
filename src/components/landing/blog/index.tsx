import style from './style.module.css'
import BlogArticle from '../../blog/blogArticle'
import { useGetPosts } from '../../../lib/hooks/post'
import CardLoadingSkeleton from '../../__global__/cardLoadingSkeleton'
import { fakeList } from '../../../lib/helpers'

const LandinBlog = () => {

  const { data, isFetching } = useGetPosts()

  return (
    <section className={style.section}>
      <div className={style.blog}>
        <div className={style.list__cards}>
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
        </div>
      </div>
    </section>
  )
}

export default LandinBlog