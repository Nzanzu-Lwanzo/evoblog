import style from './style.module.css'
import BlogArticle from '../../blog/blogArticle'

const LandinBlog = () => {
  return (
    <section className={style.section}>
      <div className={style.blog}>
        <div className={style.list__cards}>
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
        </div>
      </div>
    </section>
  )
}

export default LandinBlog