import { createFileRoute } from '@tanstack/react-router'
import SampleHero from '../../../components/sample/hero'
import SampleContent from '../../../components/sample/content'

export const Route = createFileRoute('/sample/[slug]/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SampleHero />
        <SampleContent />
    </>
}
