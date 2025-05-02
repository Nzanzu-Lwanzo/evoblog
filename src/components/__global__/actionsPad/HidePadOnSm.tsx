import { useActionsPadContext } from '../../../contexts/ActionsPadContext'
import style from './style.module.css'
import { XCircle } from 'lucide-react'

const HidePadOnSm = () => {

    const ctx = useActionsPadContext()

    return (
        <button
            type="button"
            className={`
                ${style.nav__action}
                ${style.hide__pad__on__sm}
            `}
            onClick={() => ctx?.setIsPadVisible(false)}>
            <XCircle size={20} stroke='currentColor' />
        </button>
    )
}

export default HidePadOnSm