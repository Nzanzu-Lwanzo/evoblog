import { createFileRoute } from '@tanstack/react-router'
import LandingHero from '../components/landing/hero'
import LandinBlog from '../components/landing/blog'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <LandingHero />
        <LandinBlog />
    </>
}
