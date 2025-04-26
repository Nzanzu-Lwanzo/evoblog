import style from './style.module.css'
import BlogArticle from './blogArticle'

const BlogLister = () => {
    return (
        <section className={style.blog__lister}>
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
            <BlogArticle />
        </section>
    )
}

export default BlogLister