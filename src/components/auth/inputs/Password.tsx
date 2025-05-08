import style from '../style.module.css'

const PasswordInput = () => {
    return (
        <label className={style.label}>
            <input required type="password" name='password' className={style.input} />
            <span className={style.span__placeholders}>Mot de passe</span>
        </label>
    )
}

export default PasswordInput