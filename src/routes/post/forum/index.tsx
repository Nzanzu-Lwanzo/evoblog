import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/forum/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/post/forum/"!</div>
}
