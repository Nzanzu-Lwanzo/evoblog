import { createFileRoute } from '@tanstack/react-router'
import SignUpForm from '../../components/auth/signup'

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='center' style={{ minHeight: 'calc(100dvh - 140px)' }}>
    <SignUpForm />
  </main>
}
