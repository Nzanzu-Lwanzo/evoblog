import { createFileRoute } from '@tanstack/react-router'
import SampleLister from '../../../components/sample/lister'

export const Route = createFileRoute('/sample/list/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SampleLister />
    </>
}
