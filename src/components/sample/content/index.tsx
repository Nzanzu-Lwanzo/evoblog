import style from './style.module.css'
import SampleElement from '../element'
import { useViewSampleContext } from '../../../contexts/ViewSampleContext'
import { PortableText } from '@portabletext/react'

const SampleContent = () => {

    const ctx = useViewSampleContext()

    return (
        <article className={style.section} id='no__padding'>
            <PortableText value={ctx?.sample.context || []} />

            {ctx?.sample && (
                <SampleElement
                    key={ctx.sample.original._id}
                    videoId={ctx.sample.original.videoId}
                    title={ctx.sample.original.title}
                    singers={ctx.sample.original.artists.map((artist) => artist.name)}
                    releaseYear={parseInt(ctx.sample.original.releaseYear, 10) ?? 0}
                    sample={false}
                />
            )}

            {
                ctx?.sample && (
                    <>
                        {
                            ctx.sample.samplers.map((song) => {
                                return <SampleElement
                                    key={song._id}
                                    videoId={song.videoId}
                                    title={song.title}
                                    singers={song.artists.map((artist) => artist.name)}
                                    releaseYear={parseInt(song.releaseYear, 10) ?? 0}
                                    sample={true}
                                />
                            })
                        }
                    </>
                )
            }
        </article>
    )
}

export default SampleContent