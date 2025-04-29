import style from './style.module.css'

const BlogLoadingSkeleton = () => {
  return (
    <div className={style.blog__card}>
      <div className={style.meta__infos}>
        <div className={style.avatar}></div>
        <div className={style.meta__text}></div>
      </div>
      <div className={style.title}></div>
      <div className={style.introduction}></div>
      <div className={style.introduction}></div>
      <div className={style.read__article}>
        <div className={style.read__line}></div>
        <div className={style.read__icon}></div>
      </div>
    </div>
  )
}

export default BlogLoadingSkeleton