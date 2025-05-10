import { useReadPostContext } from "../../../../contexts/ReadArticleContext"
import style from './style.module.css'


export const ArticleSeoData = () => {

    const ctx = useReadPostContext()

    return (
        <div className={style.seo__container}>
            <h2 className={style.title}>Introduction</h2>
            <p>
                {ctx?.post.description}
            </p>
        </div>
    )
}
