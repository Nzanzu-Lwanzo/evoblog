import style from './style.module.css'

const FullPageLoader = () => {
    return (
        <div className={`center ${style.page}`}>
            {/* From Uiverse.io by SangeethSujith */}
            <div className={style.banter__loader}>
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
                <div className={style.banter__loader__box} />
            </div>
        </div>

    )
}

export default FullPageLoader