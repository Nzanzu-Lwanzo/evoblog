import style from './style.module.css'
import ArticleContent from './ArticleContent'
import ScrollSpy from './Scrollspy'
import Article from './Article';
import { Post } from '../../../lib/@type';

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "enjeux", label: "Les enjeux de la sécurité en RTC" },
    { id: "responsabilites", label: "Django : quelles responsabilités côté backend ?" },
    { id: "techniques", label: "Techniques de sécurisation" },
    { id: "conclusion", label: "Conclusion" }
];


const ReadArticle = ({ post }: { post: Post }) => {
    
    return (
        <section className={style.section}>
            <div className={style.summary__timeline}>
                <ScrollSpy sections={sections} />
            </div>
            <ArticleContent post={post} />
            <div className={style.list__articles}>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </section>
    )
}

export default ReadArticle