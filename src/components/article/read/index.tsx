import style from './style.module.css'
import ArticleContent from './ArticleContent'
import ScrollSpy from './Scrollspy'
import MoreArticles from './MoreArticles';

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "enjeux", label: "Les enjeux de la sécurité en RTC" },
    { id: "responsabilites", label: "Django : quelles responsabilités côté backend ?" },
    { id: "techniques", label: "Techniques de sécurisation" },
    { id: "conclusion", label: "Conclusion" }
];


const ReadArticle = () => {

    return (
        <section className={style.section}>
            <div className={style.summary__timeline}>
                <ScrollSpy sections={sections} />
            </div>
            <ArticleContent />
            <MoreArticles />
        </section>
    )
}

export default ReadArticle