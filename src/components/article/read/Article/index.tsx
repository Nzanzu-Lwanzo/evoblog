import style from './style.module.css'
import Avatar from '../../../__global__/avatar'

const Article = () => {
    return (
        <div className={style.article__card}>
            <h3 className={style.title}>Apprendre les bases de l'animation avec React Gsap</h3>
            <a href='#' className={style.link__to__read}>Envie de donner vie à vos interfaces React ? GSAP est une librairie d’animation puissante et fluide. Dans cet article, découvrez comment animer facilement vos composants avec GSAP, comprendre ses bases et créer des transitions interactives et dynamiques.</a>
            <div className={style.meta__infos}>
                <Avatar img={{ src: '/img/user.jpg' }} dims={30} />
                <p>par Grace Kazingufu | le 12.12.2025</p>
            </div>
        </div>
    )
}

export default Article