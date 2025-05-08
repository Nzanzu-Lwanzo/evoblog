import { createFileRoute, notFound } from '@tanstack/react-router'
import ArticleHero from '../../../../components/article/hero'
import ReadArticle from '../../../../components/article/read'
import { getPost } from '../../../../backend/queries/post'
import FullPageLoader from '../../../../components/__global__/fullPageLoader'
import { ReadPostContextProvider } from '../../../../contexts/ReadArticleContext'
import { useMatch } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/read/$slug/')({
    component: RouteComponent,
    loader(ctx) {
        return getPost(ctx.params.slug)
    },
})

function RouteComponent() {

    const { loaderData, isFetching } = useMatch({
        from: '/blog/read/$slug/'
    })

    if (isFetching) return <FullPageLoader />
    if (!loaderData) return notFound()

    return (
        <ReadPostContextProvider post={loaderData}>
            <ArticleHero />
            <ReadArticle />
        </ReadPostContextProvider>
    )
}
