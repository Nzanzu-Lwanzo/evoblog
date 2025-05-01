import { useRef } from 'react';
import { gsap } from 'gsap';
import style from './style.module.css';
import { useGSAP } from '@gsap/react';
import { useViewSampleContext } from '../../../contexts/ViewSampleContext';
import Original from './Original';
import Sampler from './Sampler';

gsap.registerPlugin(useGSAP)

const SampleHero = () => {

  const ctx = useViewSampleContext()
  const sectionRef = useRef<HTMLHtmlElement | null>(null)
  const titleRef = useRef<HTMLHRElement | null>(null);
  const originalRef = useRef<HTMLSpanElement | null>(null);
  const samplerRef = useRef<HTMLSpanElement | null>(null);

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
    if (originalRef.current) {
      const jColeLetters = originalRef.current.querySelectorAll('span');
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
    if (samplerRef.current) {
      const erykahBaduLetters = samplerRef.current.querySelectorAll('span');
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

  return (
    <section ref={sectionRef} className={`square__bg center ${style.section}`}>
      <div style={{ height: '100%' }}>
        <h1 ref={titleRef} className={style.big__title}>
          Da Sample <br />
          {ctx?.sample && <Original ref={originalRef} sample={ctx.sample} />}{' '}vs{' '}
          {ctx?.sample && <Sampler ref={samplerRef} sample={ctx.sample} />}
        </h1>
      </div>
    </section>
  );
};

export default SampleHero;
