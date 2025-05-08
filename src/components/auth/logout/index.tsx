import { AuthenticatedUserType } from '../../../lib/@types'
import { LOCAL_STORAGE_KEYS } from '../../../lib/enums'
import { useLogOut } from '../../../lib/hooks/authentication'
import { getFromLocalStorage } from '../../../lib/storage'
import style from './style.module.css'
import Loader from '../../__global__/Loader'

const LogOut = () => {

  const user = getFromLocalStorage<AuthenticatedUserType>(LOCAL_STORAGE_KEYS.AUTHENTICATED_USER)
  const { loggingOut, logout: handleLogout } = useLogOut()

  return (
    <div className={style.logout__pad}>
      <h1 className={style.title}>Vous êtes actuellement connecté comme <span className={style.username}>{user?.name}</span></h1>
      <p className={style.text}>Pour vous déconnecter, cliquez sur le bouton ci-dessous. Vous serez redirigé vers la page d'accueil</p>
      <button className={style.logout__button} onClick={handleLogout}>
        {loggingOut ? <Loader /> : "Déconnexion"}
      </button>
    </div>
  )
}

export default LogOut