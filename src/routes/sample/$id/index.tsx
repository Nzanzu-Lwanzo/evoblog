import { createFileRoute, notFound, useMatch } from '@tanstack/react-router'
import SampleHero from '../../../components/sample/hero'
import SampleContent from '../../../components/sample/content'
import { getSample } from '../../../backend/queries/sample'
import { ViewSampleContextProvider } from '../../../contexts/ViewSampleContext'
import FullPageLoader from '../../../components/__global__/fullPageLoader'
import { Suspense } from 'react'

export const Route = createFileRoute('/sample/$id/')({
    component: RouteComponent,
    loader(ctx) {
        return getSample(ctx.params.id)
    },
})

function RouteComponent() {

    const { loaderData, isFetching } = useMatch({
        from: '/sample/$id/'
    })

    if (isFetching) return <FullPageLoader />
    if (!loaderData) return notFound()

    return <ViewSampleContextProvider sample={loaderData}>
        <Suspense fallback={<FullPageLoader />}>
            <SampleHero />
            <SampleContent />
        </Suspense>
    </ViewSampleContextProvider>
}
