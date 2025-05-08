import style from '../style.module.css'

const EmailInput = () => {
    return (
        <label className={style.label}>
            <input required type="email" name='email' className={style.input} />
            <span className={style.span__placeholders}>Email</span>
        </label>
    )
}

export default EmailInput