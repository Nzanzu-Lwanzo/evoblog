import style from './style.module.css'
import Loader from '../../__global__/Loader'
import { MoveRight } from 'lucide-react'
import { useSubscribeToNewsletter } from '../../../lib/hooks/newsletter'
import { useAppContext } from '../../../contexts/AppContext'

const SubscribeBtn = () => {

    const appCtx = useAppContext()
    const { loading } = useSubscribeToNewsletter()

    return (
        <button
            type="submit"
            className={style.button}
            disabled={loading || !!appCtx?.subscriptionData}>
            <span>
                S'abonner
            </span>
            <span className={`center ${style.icon}`}>
                {loading ? <Loader /> : <MoveRight size={20} />}
            </span>
        </button>
    )
}

export default SubscribeBtn