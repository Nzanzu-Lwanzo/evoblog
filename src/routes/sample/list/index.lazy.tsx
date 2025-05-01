import { createLazyFileRoute } from '@tanstack/react-router'
import SampleLister from '../../../components/sample/lister'

export const Route = createLazyFileRoute('/sample/list/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SampleLister />
    </>
}
