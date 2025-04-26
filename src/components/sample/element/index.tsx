import style from './style.module.css'

interface SampleElementPropTyps {
  videoId: string;
  title: string;
  singers: string[];
  releaseYear: number
}

const SampleElement = ({ releaseYear, videoId, title, singers }: SampleElementPropTyps) => {
  return (
    <div className={style.sample__element}>
      <div className={style.details__content}>
        <h2 className={style.title}>{singers.length > 1 ? `${singers[0]} & alii.` : singers[0]} : {title}</h2>
        <span className={style.meta__info}>Original : {releaseYear}</span>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
        className={style.youtube__frame}
      >
      </iframe>
    </div>
  )
}

export default SampleElement