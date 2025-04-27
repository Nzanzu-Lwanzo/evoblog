import style from './style.module.css'
import SamplesListElemet from './SamplesListElemet'

const SampleLister = () => {
    return (
        <section className={style.lister__section}>
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
            <SamplesListElemet />
        </section>
    )
}

export default SampleLister