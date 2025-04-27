import { useEffect, useState } from 'react'
import style from './style.module.css'
import { getFromLocalStorage, saveToLocalStorage } from '../../../lib/storage'
import { LOCAL_STORAGE_KEYS } from '../../../lib/enums'

export type ThemeType = "light" | "dark"

const SwitchTheme = () => {

    const localStoageTheme = getFromLocalStorage(LOCAL_STORAGE_KEYS.THEME) || 'light'
    const [theme, setTheme] = useState<ThemeType>(localStoageTheme)

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
            {/* From Uiverse.io by JkHuger */}
            <input
                className={style.l}
                type="checkbox" onChange={(event) => {
                    let selectedTheme = event.target.checked ? 'light' : 'dark'
                    setTheme(selectedTheme as ThemeType)
                    saveToLocalStorage(LOCAL_STORAGE_KEYS.THEME, selectedTheme)
                }}
                defaultChecked={theme === 'light'}
            />
        </>

    )
}

export default SwitchTheme