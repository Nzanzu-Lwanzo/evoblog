import style from './style.module.css'
import Topbar from './Topbar'
import { ActionsPadContextProvider, useActionsPadContext } from '../../../contexts/ActionsPadContext'
import CommentsSection from './comments'
import ShowPadOnSm from './ShowPadOnSm'

const ActionsPad = () => {

    const ctx = useActionsPadContext()

    return (
        <>
            <div className={`
            exclude__padding
            ${style.actions__pad}
            ${ctx?.isPadVisible && style.active}
        `}>
                <Topbar />
                <CommentsSection />
            </div>
            <ShowPadOnSm />
        </>

    )
}

export default () => {
    return <ActionsPadContextProvider>
        <ActionsPad />
    </ActionsPadContextProvider>
}