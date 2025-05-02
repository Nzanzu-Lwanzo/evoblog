import style from './style.module.css'
import Topbar from './Topbar'
import { ActionPadSection, ActionsPadContextProvider, useActionsPadContext } from '../../../contexts/ActionsPadContext'
import CommentsSection from './comments'
import ShowPadOnSm from './ShowPadOnSm'
import React from 'react'
import Likes from './likes'
import Bookmarks from './bookmarks'

const SECTIONS_MAP: Record<ActionPadSection, React.ReactNode> = {
    "comments": <CommentsSection />,
    "likes": <Likes />,
    "bookmarks": <Bookmarks />
}

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
                {SECTIONS_MAP[ctx?.currentActionPadSection!]}
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