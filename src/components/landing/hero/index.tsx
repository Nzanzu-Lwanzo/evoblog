import style from './style.module.css'
import { MoveRight } from 'lucide-react'

const LandingHero = () => {
  return (
    <section className={style.section}>
      <div className={style.layer}>
        <div className={style.content}>
          <h1 className={style.big_title}>Salut ! Je suis <span className={style.my__name}>Victor Nzanzu</span>, développeur web et romancier basé en République démocratique du Congo. J'aime partager ce que je connais, ce que j'aime et ce que je pense. Intéressés ? Abonnez-vous à ma newsletter.</h1>
          <form className={style.newsletter__form}>
            <input type="email" placeholder='tupac@gmail.com' className={style.input} />
            <button type="submit" className={style.button}>
              <span>S'abonner</span>
              <span className={`center ${style.icon}`}>
                <MoveRight size={20} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LandingHero