import { createFileRoute } from '@tanstack/react-router'
import LogInForm from '../../components/auth/login'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='center' style={{ minHeight: 'calc(100dvh - 140px)' }}>
    <LogInForm />
  </main>
}
