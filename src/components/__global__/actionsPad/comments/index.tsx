import style from './style.module.css'
import CommentCard from './commentCard'
import CommentForm from './commentForm'
import { useReadPostContext } from '../../../../contexts/ReadArticleContext'

const CommentsSection = () => {

  const ctx = useReadPostContext()
  let commentsCount = ctx?.post.comments.length

  return (
    <div className={style.list__comments}>
      {!commentsCount || commentsCount === 0 ? (
        <>
          <p className={style.no__comments__yet}>Aucun commentaire n'a encore été posté sur cet article. Postez le premier !</p>
        </>
      ) : (
        <>
          {
            ctx?.post.comments.map((comment) => {
              return <CommentCard key={comment.id} comment={comment} />
            })
          }
        </>
      )}
      <CommentForm />
    </div>
  )
}

export default CommentsSection