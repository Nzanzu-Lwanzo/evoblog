import style from './style.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useSubscribeToNewsletter } from '../../../lib/hooks/newsletter'
import { useAppContext } from '../../../contexts/AppContext'
import SubscribeBtn from './SubscribeBtn'
import UnsubscribeBtn from './UnsubscribeBtn'

gsap.registerPlugin(useGSAP)

const LandingHero = () => {

  const appCtx = useAppContext()
  const { subscribeToNewsletter, loading } = useSubscribeToNewsletter()
  const sectionRef = useRef<HTMLElement | null>(null);
  const buttonContainerRef = useRef<HTMLButtonElement | null>(null)
  const isSubscribed = !!appCtx?.subscriptionData?.contact

  useGSAP(() => {
    gsap.from(`.${style.content}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(
      [`.${style.input}`, buttonContainerRef.current],
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.5,
      }
    );

  }, { scope: sectionRef });


  return (
    <section className={`center ${style.section}`} ref={sectionRef}>
      <div className={style.content}>
        <h1 className={style.big_title}>
          Salut ! Je suis <span className={style.user__name}>Victor Nzanzu</span>,
          développeur web et romancier basé en République démocratique du Congo.
          J'aime partager ce que je connais, ce que j'aime et ce que je pense.
          {!appCtx?.subscriptionData?.contact && "Intéressés ? Abonnez-vous à ma newsletter."}
        </h1>
        <form className={style.newsletter__form} onSubmit={subscribeToNewsletter}>
          <div className={style.input__container}>
            <label htmlFor="contact" className={style.label}>Email ou numéro SMS</label>
            <input
              type="text"
              name='contact'
              id='contact'
              placeholder='tupac@gmail.com ou 0998855666'
              className={style.input}
              disabled={loading || isSubscribed}
              value={appCtx?.subscriptionData?.contact}
            />
          </div>
          <span ref={buttonContainerRef}>
            {isSubscribed ? <UnsubscribeBtn /> : <SubscribeBtn />}
          </span>
        </form>
      </div>
    </section>
  )
}

export default LandingHero