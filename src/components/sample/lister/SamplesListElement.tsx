import style from './style.module.css'
import { Link } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'
import { ForListSamples } from '../../../lib/@type'
import { Route as ViewSampleRoute } from '../../../routes/sample/$id'

const SamplesListElement = ({ sample }: { sample: ForListSamples }) => {
    return (
        <div className={style.list__element}>
            <p className={style.tag}>Da Sample by N.M.L 📀</p>
            <h3 className={style.title}>{sample.artists.join(" - ")}</h3>
            <p className={style.details}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eum necessitatibus placeat dignissimos dolores sapiente voluptates iusto pariatur voluptate recusandae totam aut vitae voluptatibus molestias error doloremque, optio incidunt voluptas?
            </p>
            <Link to={ViewSampleRoute.to} params={{ id: sample._id }} className={style.view__button}>
                <span>Découvrir le sample</span>
                <span className={`center ${style.icon}`}>
                    <MoveRight size={20} stroke='currentColor' />
                </span>
            </Link>
        </div>
    )
}

export default SamplesListElement