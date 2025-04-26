import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/forum/[slug]/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>

    </>
}
