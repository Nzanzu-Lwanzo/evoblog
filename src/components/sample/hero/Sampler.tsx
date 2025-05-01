import { ForwardedRef, forwardRef } from "react"
import style from './style.module.css'
import { wrapLetters } from "../../../lib/tsxhelpers"
import { Sample } from "../../../lib/@type"

const Sampler = forwardRef(({ sample }: { sample: Sample }, ref: ForwardedRef<HTMLSpanElement>) => {
    return <>
        <span ref={ref} className={style.artist}>
            {wrapLetters(sample.samplers.at(0)!.artists.at(0)!.name.replace(" ", "|"))}
        </span>
    </>
})

export default Sampler