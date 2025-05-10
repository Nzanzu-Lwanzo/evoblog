import style from './style.module.css'
import ArticleContent from './ArticleContent'
import MoreArticles from './MoreArticles';
import { ArticleSeoData } from './SEO';

const ReadArticle = () => {

    return (
        <section className={style.section}>
            <div className={style.summary__timeline}>
                <ArticleSeoData />
            </div>
            <ArticleContent />
            <MoreArticles />
        </section>
    )
}

export default ReadArticle