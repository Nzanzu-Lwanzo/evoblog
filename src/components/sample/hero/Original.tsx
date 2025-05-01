import { ForwardedRef, forwardRef } from "react"
import style from './style.module.css'
import { wrapLetters } from "../../../lib/tsxhelpers"
import { Sample } from "../../../lib/@type"

const Original = forwardRef(({ sample }: { sample: Sample }, ref: ForwardedRef<HTMLSpanElement>) => {
    return <>
        <span ref={ref} className={style.artist}>
            {wrapLetters(sample.original.artists.at(0)!.name.replace(" ", "|"))}
        </span>
    </>
})

export default Original