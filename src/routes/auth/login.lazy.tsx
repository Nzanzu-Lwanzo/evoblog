import { createLazyFileRoute } from '@tanstack/react-router'
import LogInForm from '../../components/auth/login'
import { getFromLocalStorage } from '../../lib/storage'
import { LOCAL_STORAGE_KEYS } from '../../lib/enums'
import { AuthenticatedUserType } from '../../lib/@types'
import LogOut from '../../components/auth/logout'

export const Route = createLazyFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {

  const user = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)

  return (
    <main className='center' style={{ minHeight: 'calc(100dvh - 140px)', paddingInline: '1rem' }}>
      {user?.id ? <LogOut /> : <LogInForm />}
    </main>
  )
}
