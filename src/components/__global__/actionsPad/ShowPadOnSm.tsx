import { useActionsPadContext } from '../../../contexts/ActionsPadContext'
import style from './style.module.css'
import { SquareArrowUpRight } from 'lucide-react'

const ShowPadOnSm = () => {

  const ctx = useActionsPadContext()

  return (
    <button
      type="button"
      className={`exclude__padding ${style.show__pad__on__sm}`}
      onClick={() => ctx?.setIsPadVisible(true)}>
      <span>Interragir</span>
      <span className="center">
        <SquareArrowUpRight size={18} stroke='currentColor' />
      </span>
    </button>
  )
}

export default ShowPadOnSm