import { createFileRoute } from '@tanstack/react-router'
import ArticleHero from '../../../../components/article/hero'
import ReadArticle from '../../../../components/article/read'

export const Route = createFileRoute('/post/read/[id]/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <ArticleHero />
        <ReadArticle />
    </>
}
