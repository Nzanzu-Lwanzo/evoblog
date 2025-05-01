import { createLazyFileRoute } from '@tanstack/react-router'
import LogInForm from '../../components/auth/login'

export const Route = createLazyFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <main className='center' style={{ minHeight: 'calc(100dvh - 140px)', paddingInline: '1rem' }}>
    <LogInForm />
  </main>
}
