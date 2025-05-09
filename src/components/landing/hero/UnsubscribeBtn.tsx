import style from './style.module.css'
import { useUnsubscribeFromNewsletter } from '../../../lib/hooks/newsletter'
import Loader from '../../__global__/Loader'
import { MoveRight } from 'lucide-react'

const UnsubscribeBtn = () => {

    const { loading, unsubscribe } = useUnsubscribeFromNewsletter()

    return (
        <button
            type="button"
            className={style.button}
            disabled={loading}
            onClick={unsubscribe}>
            <span>
                Désabonner
            </span>
            <span className={`center ${style.icon}`}>
                {loading ? <Loader /> : <MoveRight size={20} />}
            </span>
        </button>
    )
}

export default UnsubscribeBtn