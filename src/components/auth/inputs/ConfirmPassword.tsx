import style from '../style.module.css'

const ConfirmPasswordInput = () => {
    return (
        <label className={style.label}>
            <input required type="password" name='confirmPassword' className={style.input} />
            <span className={style.span__placeholders}>Confirmer mot de passe</span>
        </label>
    )
}

export default ConfirmPasswordInput