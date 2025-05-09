import style from './style.module.css'
import { MoveRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Loader from '../../__global__/Loader'
import { useSubscribeToNewsletter } from '../../../lib/hooks/newsletter'
import { getFromLocalStorage } from '../../../lib/storage'
import { LOCAL_STORAGE_KEYS } from '../../../lib/enums'
import { SubscriberType } from '../../../firebase/@types'

gsap.registerPlugin(useGSAP)

const LandingHero = () => {

  const { subscribeToNewsletter, loading } = useSubscribeToNewsletter()
  const sectionRef = useRef<HTMLElement | null>(null);
  const buttonContainerRef = useRef<HTMLButtonElement | null>(null)
  const subscrptionData = getFromLocalStorage<SubscriberType>(LOCAL_STORAGE_KEYS.SUBSCRIPTION_DATA)
  const isSubscribed = !!subscrptionData?.contact

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
          développeur web et romancier basé en République démocratique du Congo. J'aime partager ce que je connais, ce que j'aime et ce que je pense. {!subscrptionData?.contact && "Intéressés ? Abonnez-vous à ma newsletter."}
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
              defaultValue={subscrptionData?.contact}
            />
          </div>
          <span ref={buttonContainerRef}>
            <button
              type="submit"
              className={style.button}
              disabled={loading || isSubscribed}>
              <span>
                {isSubscribed ? 'Abonné' : "S'abonner"}
              </span>
              <span className={`center ${style.icon}`}>
                {loading ? <Loader /> : <MoveRight size={20} />}
              </span>
            </button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default LandingHero