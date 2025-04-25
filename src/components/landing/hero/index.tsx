import style from './style.module.css'
import { MoveRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

const LandingHero = () => {

  const sectionRef = useRef<HTMLElement | null>(null);
  const buttonContainerRef = useRef<HTMLButtonElement | null>(null)

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
        <h1 className={style.big_title}>Salut ! Je suis <span className={style.my__name}>Victor Nzanzu</span>, développeur web et romancier basé en République démocratique du Congo. J'aime partager ce que je connais, ce que j'aime et ce que je pense. Intéressés ? Abonnez-vous à ma newsletter.</h1>
        <form className={style.newsletter__form}>
          <input type="email" placeholder='tupac@gmail.com' className={style.input} />
          <span ref={buttonContainerRef}>
            <button type="submit" className={style.button}>
              <span>S'abonner</span>
              <span className={`center ${style.icon}`}>
                <MoveRight size={20} />
              </span>
            </button>
          </span>
        </form>
      </div>
    </section>
  )
}

export default LandingHero