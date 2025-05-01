import style from './style.module.css'
import SamplesListElement from './SamplesListElement'
import { useGetSamples } from '../../../lib/hooks/samples'
import CardLoadingSkeleton from '../../__global__/cardLoadingSkeleton'
import { fakeList } from '../../../lib/helpers'

const SampleLister = () => {

    const { data, isFetching } = useGetSamples()

    return (
        <section className={style.lister__section}>
            {isFetching ? (
                <>
                    {fakeList.map((elt) => {
                        return <CardLoadingSkeleton key={elt} />
                    })}
                </>
            ) : (
                <>
                    {data?.map((sample) => {
                        return <SamplesListElement key={sample._id} sample={sample} />
                    })}
                </>
            )}
        </section>
    )
}

export default SampleLister