import { useRef } from 'react';
import { gsap } from 'gsap';
import style from './style.module.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const SampleHero = () => {
  const sectionRef = useRef<HTMLHtmlElement | null>(null)
  const titleRef = useRef<HTMLHRElement | null>(null);
  const jColeRef = useRef<HTMLSpanElement | null>(null);
  const erykahBaduRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    // Animation du h1 principal
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
    });

    const tl = gsap.timeline()

    // Animation lettre par lettre pour J Cole
    if (jColeRef.current) {
      const jColeLetters = jColeRef.current.querySelectorAll('span');
      tl.from(jColeLetters, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        delay: .5,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    // Animation lettre par lettre pour Erykah Badu
    if (erykahBaduRef.current) {
      const erykahBaduLetters = erykahBaduRef.current.querySelectorAll('span');
      tl.from(erykahBaduLetters, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        // delay: 1.5,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

  }, { scope: sectionRef });

  const wrapLetters = (text: string) =>
    text.split('').map((letter, index) => (
      letter === "|" ? (<span key={index}>{" "}</span>) : (
        <span key={index} style={{ display: 'inline-block' }}>
          {letter}
        </span>
      )
    ));

  return (
    <section ref={sectionRef} className={`square__bg center ${style.section}`}>
      <div style={{ height: '100%' }}>
        <h1 ref={titleRef} className={style.big__title}>
          Da Sample <br />
          <span ref={jColeRef} className={style.artist}>
            {wrapLetters('J|Cole')}
          </span>{' '}
          vs{' '}
          <span ref={erykahBaduRef} className={style.artist}>
            {wrapLetters('Erykah|Badu')}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default SampleHero;
