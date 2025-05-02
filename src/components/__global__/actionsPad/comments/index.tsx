import style from './style.module.css'
import CommentCard from '../commentCard'
import CommentForm from '../commentForm'

const CommentsSection = () => {
  return (
    <div className={style.list__comments}>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentForm />
    </div>
  )
}

export default CommentsSection