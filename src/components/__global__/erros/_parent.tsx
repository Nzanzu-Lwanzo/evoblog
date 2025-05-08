import style from './style.module.css'
import { useRouter } from '@tanstack/react-router'
import { MoveRight } from 'lucide-react'
import { PropsWithChildren } from 'react';

interface ParentErrorComponentProps {
  title: string;
}


const ParentErrorComponent = ({ title, children }: PropsWithChildren<ParentErrorComponentProps>) => {

  const router = useRouter()

  const handleNavigateWithReplacement = () => {
    router.navigate({
      to: "/",
      replace: true
    })
  }

  return (
    <section className={`center ${style.page__not__found}`}>
      <h1 className={style.big__decorative__title}>{title}</h1>
      <p className={style.message}>
        {children}
      </p>
      <button className={style.back__to__home} onClick={handleNavigateWithReplacement}>
        <span>Retour à la page d'acceuil</span>
        <span className={`${style.icon} center`}>
          <MoveRight size={20} stroke='currentColor' />
        </span>
      </button>
    </section>
  )
}

export default ParentErrorComponent