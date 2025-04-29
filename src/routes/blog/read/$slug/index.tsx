import { createFileRoute } from '@tanstack/react-router'
import ArticleHero from '../../../../components/article/hero'
import ReadArticle from '../../../../components/article/read'
import { getPost } from '../../../../backend/queries/post'
import { useQuery } from '@tanstack/react-query'
import FullPageLoader from '../../../../components/__global__/fullPageLoader'

export const Route = createFileRoute('/blog/read/$slug/')({
    component: RouteComponent,
    loader(ctx) {
        return getPost(ctx.params.slug)
    },
})

function RouteComponent() {

    const { slug } = Route.useParams()

    const { data: post, isFetching } = useQuery({
        queryKey: ['post'],
        queryFn: async () => await getPost(slug)
    })

    return <>
        {isFetching ? <FullPageLoader /> : (
            <>
                <ArticleHero post={post} />
                <ReadArticle post={post} />
            </>
        )}
    </>
}
