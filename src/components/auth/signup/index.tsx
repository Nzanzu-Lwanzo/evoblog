import style from '../style.module.css'
import { Link } from '@tanstack/react-router'
import { useAuthenticate } from '../../../lib/hooks/authentication'
import Loader from '../../__global__/Loader'
import OAuthButtons from '../oauth/_buttons'
import NameInput from '../inputs/Name'
import EmailInput from '../inputs/Email'
import PasswordInput from '../inputs/Password'
import ConfirmPasswordInput from '../inputs/ConfirmPassword'

const SignUpForm = () => {

    const { authenticate, loading } = useAuthenticate("signup")

    return (
        <>
            {/* From Uiverse.io by Yaya12085 */}
            <form className={style.form} onSubmit={authenticate}>
                <p className={style.title}>S'abonner</p>
                <p className={style.message}>Abonnez-vous maintenant et jouissez des privilèges VIP !</p>
                
                <NameInput />
                <EmailInput />
                <PasswordInput />
                <ConfirmPasswordInput />

                <button className={style.submit} disabled={loading}>
                    {loading ? <Loader height={20} width={20} /> : <span>Soumettre</span>}
                </button>
                <p className={style.switch__login__signup}>
                    Vous avez déjà un compte ? <Link to="/auth/login">Se connecter</Link>{" "}
                </p>
                <OAuthButtons />
            </form>
        </>

    )
}

export default SignUpForm