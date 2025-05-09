import { createFileRoute, notFound } from '@tanstack/react-router'
import ArticleHero from '../../../../components/article/hero'
import ReadArticle from '../../../../components/article/read'
import { getPost } from '../../../../backend/queries/post'
import FullPageLoader from '../../../../components/__global__/fullPageLoader'
import { ReadPostContextProvider } from '../../../../contexts/ReadArticleContext'
import { useMatch } from '@tanstack/react-router'
import { getPostComments } from '../../../../firebase/queries/comments.queries'

export const Route = createFileRoute('/blog/read/$slug/')({
    component: RouteComponent,
    async loader(ctx) {

        const postWithoutComments = await getPost(ctx.params.slug)
        if (!postWithoutComments) {
            notFound()
            return
        }

        const commentsPromise = await getPostComments(postWithoutComments?._id)
        const comments = await Promise.all(commentsPromise)

        return {
            ...postWithoutComments,
            comments
        }
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
