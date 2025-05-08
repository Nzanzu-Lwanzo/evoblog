import style from '../style.module.css'
import { Link } from '@tanstack/react-router'
import OAuthButtons from '../oauth/_buttons'
import { useAuthenticate } from '../../../lib/hooks/authentication'
import Loader from '../../__global__/Loader'
import EmailInput from '../inputs/Email'
import PasswordInput from '../inputs/Password'

const LogInForm = () => {

    const { authenticate, loading } = useAuthenticate("login")

    return (
        <>
            {/* From Uiverse.io by Yaya12085 */}
            <form className={style.form} onSubmit={authenticate}>
                <p className={style.title}>Se connecter</p>
                <p className={style.message}>Connectez-vous maintenant et ne ratez rien !</p>

                <EmailInput />
                <PasswordInput />

                <button className={style.submit} disabled={loading}>
                    {loading ? <Loader height={20} width={20} /> : <span>Soumettre</span>}
                </button>
                <p className={style.switch__login__signup}>
                    Vous n'avez pas de compte ? <Link to="/auth/signup">Abonnez-vous</Link>{" "}
                </p>
                <OAuthButtons />
            </form>
        </>

    )
}

export default LogInForm