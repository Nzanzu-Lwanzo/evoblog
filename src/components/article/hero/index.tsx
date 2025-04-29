import style from './style.module.css'
import Avatar from '../../__global__/avatar'
import { Post } from '../../../lib/@type'
import { formatDateTime } from '../../../lib/helpers'
import { buildImage } from '../../../backend/client'

const ArticleHero = ({ post }: { post: Post }) => {

  return (
    <section className={`square__bg ${style.section}`} >
      <div className={style.content__card}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.meta__infos}>
          <Avatar img={{ src: buildImage(post.author.image) || '/img/user.jpg' }} dims={45} />
          <div>
            <p style={{ marginBottom: '2px' }}>Posté le {formatDateTime(post._updatedAt!)}</p>
            <p>
              <span>par</span>{" "}
              <a href='#' className={style.author__name}>{post.author.name}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleHero