import style from '../style.module.css'
import { Link } from '@tanstack/react-router'

const SignUpForm = () => {
    return (
        <>
            {/* From Uiverse.io by Yaya12085 */}
            <form className={style.form}>
                <p className={style.title}>S'abonner</p>
                <p className={style.message}>Abonnez-vous maintenant et jouissez des privilèges VIP !</p>
                <div className={style.flex}>
                    <label className={style.label}>
                        <input required type="text" name='name' className={style.input} />
                        <span className={style.span__placeholders}>Nom</span>
                    </label>
                    <label className={style.label}>
                        <input required type="text" name='pseudo' className={style.input} />
                        <span className={style.span__placeholders}>Pseudo</span>
                    </label>
                </div>
                <label className={style.label}>
                    <input required type="email" name='email' className={style.input} />
                    <span className={style.span__placeholders}>Email</span>
                </label>
                <label className={style.label}>
                    <input required type="password" name='password' className={style.input} />
                    <span className={style.span__placeholders}>Mot de passe</span>
                </label>
                <label className={style.label}>
                    <input required type="password" name='confirmPassword' className={style.input} />
                    <span className={style.span__placeholders}>Confirmer mot de passe</span>
                </label>
                <button className={style.submit}>Soumettre</button>
                <p className={style.switch__login__signup}>
                    Vous avez déjà un compte ? <Link to="/auth/login">Se connecter</Link>{" "}
                </p>
            </form>
        </>

    )
}

export default SignUpForm