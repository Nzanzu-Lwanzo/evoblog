import style from '../style.module.css'

const NameInput = () => {
    return (
        <label className={style.label}>
            <input required type="text" name='name' className={style.input} />
            <span className={style.span__placeholders}>Nom</span>
        </label>
    )
}

export default NameInput