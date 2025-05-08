import style from '../style.module.css'
import { Link } from '@tanstack/react-router'
import GoogleButton from '../oauth/google'
import { useAuthenticate } from '../../../lib/hooks/authentication'
import Loader from '../../__global__/Loader'

const LogInForm = () => {

    const { authenticate, loading } = useAuthenticate("login")

    return (
        <>
            {/* From Uiverse.io by Yaya12085 */}
            <form className={style.form} onSubmit={authenticate}>
                <p className={style.title}>Se connecter</p>
                <p className={style.message}>Connectez-vous maintenant et ne ratez rien !</p>
                <label className={style.label}>
                    <input required type="email" name='email' className={style.input} />
                    <span className={style.span__placeholders}>Email</span>
                </label>
                <label className={style.label}>
                    <input required type="password" name='password' className={style.input} />
                    <span className={style.span__placeholders}>Mot de passe</span>
                </label>
                <button className={style.submit} disabled={loading}>
                    {loading ? <Loader height={20} width={20} /> : <span>Soumettre</span>}
                </button>
                <p className={style.switch__login__signup}>
                    Vous n'avez pas de compte ? <Link to="/auth/signup">Abonnez-vous</Link>{" "}
                </p>
                <GoogleButton />
            </form>
        </>

    )
}

export default LogInForm