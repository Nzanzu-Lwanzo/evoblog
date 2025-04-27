import { useEffect, useState } from 'react'
import style from './style.module.css'

const SwitchTheme = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
            {/* From Uiverse.io by JkHuger */}
            <input
                className={style.l}
                type="checkbox" onChange={(event) => setTheme(() => event.target.checked ? 'light' : 'dark')}
                defaultChecked={theme === 'light'}
            />
        </>

    )
}

export default SwitchTheme