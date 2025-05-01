import { createFileRoute } from '@tanstack/react-router'
import ArticleHero from '../../../../components/article/hero'
import ReadArticle from '../../../../components/article/read'
import { getPost } from '../../../../backend/queries/post'
import FullPageLoader from '../../../../components/__global__/fullPageLoader'
import { ReadPostContextProvider } from '../../../../contexts/ReadArticleContext'
import { Suspense } from 'react'

export const Route = createFileRoute('/blog/read/$slug/')({
    component: RouteComponent,
    loader(ctx) {
        return getPost(ctx.params.slug)
    },
})

function RouteComponent() {

    const data = Route.useLoaderData()

    return <ReadPostContextProvider post={data}>
        <Suspense fallback={<FullPageLoader />}>
            <ArticleHero />
            <ReadArticle />
        </Suspense>
    </ReadPostContextProvider>
}
