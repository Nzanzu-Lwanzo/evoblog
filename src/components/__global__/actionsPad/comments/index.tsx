import style from './style.module.css'
import CommentCard from './commentCard'
import FormAndCallerBtn from './FormAndCallerBtn'

const CommentsSection = () => {
  return (
    <div className={style.list__comments}>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <FormAndCallerBtn />
    </div>
  )
}

export default CommentsSection