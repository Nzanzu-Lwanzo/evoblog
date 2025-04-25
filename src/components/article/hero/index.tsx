import style from './style.module.css'
import Avatar from '../../__global__/avatar'

const ArticleHero = () => {
  return (
    <section className={style.section} >
      <div className={style.content__card}>
        <h1 className={style.title}>Sécuriser les communications RTC avec Django, quelles techniques pour quels enjeux ?</h1>
        <div className={style.meta__infos}>
          <Avatar img={{ src: '/img/user.jpg' }} dims={45} />
          <div>
            <p style={{ marginBottom: '2px' }}>Posté le 12.23.2025</p>
            <p>
              <span>par</span>{" "}
              <a href='#' className={style.author__name}>Grace Kazingufu</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleHero