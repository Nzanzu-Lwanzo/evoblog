import style from './style.module.css'
import Avatar from '../../__global__/avatar'
import { formatDateTime } from '../../../lib/helpers'
import { buildImage } from '../../../backend/client'
import { useReadPostContext } from '../../../contexts/ReadArticleContext'

const ArticleHero = () => {

  const ctx = useReadPostContext()

  return (
    <section className={`square__bg ${style.section}`} >
      <div className={style.content__card}>
        <h1 className={style.title}>{ctx?.post.title}</h1>
        <div className={style.meta__infos}>
          <Avatar img={{ src: buildImage(ctx?.post.author.image) || '/img/user.jpg' }} dims={45} />
          <div>
            <p style={{ marginBottom: '2px' }}>Posté le {formatDateTime(ctx?.post._updatedAt!)}</p>
            <p>
              <span>par</span>{" "}
              <a href='#' className={style.author__name}>{ctx?.post.author.name}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleHero