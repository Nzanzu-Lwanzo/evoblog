import { createFileRoute } from '@tanstack/react-router'
import BlogLister from '../../components/blog'

export const Route = createFileRoute('/blog/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <BlogLister />
    </>
}
