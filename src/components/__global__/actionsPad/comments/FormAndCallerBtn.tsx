import CommentForm from "./commentForm"
import { TextCursorInput } from "lucide-react"
import style from './style.module.css'
import { useState } from "react"

const FormAndCallerBtn = () => {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <CommentForm showForm={showForm} />
            <button
                type="button"
                className={`
                    pulse
                    ${style.toggle__comment__form}
                    ${showForm && style.push__up}
                `}
                onClick={() => setShowForm(prev => !prev)}>
                <TextCursorInput size={20} stroke='currentColor' />
            </button>
        </>
    )
}

export default FormAndCallerBtn