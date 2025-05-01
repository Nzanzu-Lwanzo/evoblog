import { createLazyFileRoute } from '@tanstack/react-router'
import BlogLister from '../../components/blog'

export const Route = createLazyFileRoute('/blog/list')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <BlogLister />
    </>
}
