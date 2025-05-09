import { usePostComment } from '../../../../../lib/hooks/comments'
import style from './style.module.css'
import { useReadPostContext } from '../../../../../contexts/ReadArticleContext'
import Loader from '../../../Loader'

const CommentForm = () => {

    const ctx = useReadPostContext()
    const { postComment, saving, addingCommentToPost } = usePostComment(ctx?.post._id)

    return (
        <div className={style.text__box}>
            <form className={style.box__container} onSubmit={postComment}>
                <textarea placeholder="Reply" name='content' className={style.textarea} />
                <div>
                    <div className={style.formatting}>
                        <button type="button" className={style.button}>
                            <svg
                                className={style.svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"
                                />
                            </svg>
                        </button>
                        <button type="button" className={style.button}>
                            <svg
                                className={style.svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className={style.path}
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M12 4H19"
                                />
                                <path
                                    className={style.path}
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M8 20L16 4"
                                />
                                <path
                                    className={style.path}
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M5 20H12"
                                />
                            </svg>
                        </button>
                        <button type="button" className={style.button}>
                            <svg
                                className={style.svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3"
                                />
                                <path
                                    className={style.path}
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M3 21H21"
                                />
                            </svg>
                        </button>
                        <button type="button" className={style.button}>
                            <svg
                                className={style.svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M4 12H20"
                                />
                                <path
                                    className={style.path}
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12"
                                />
                            </svg>
                        </button>
                        <button type="button" className={style.button}>
                            <svg
                                className={style.svg}
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    r={10}
                                    cy={12}
                                    cx={12}
                                />
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    stroke="#707277"
                                    d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
                                />
                                <path
                                    className={style.path}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={3}
                                    stroke="#707277"
                                    d="M8.00897 9L8 9M16 9L15.991 9"
                                />
                            </svg>
                        </button>
                        <button type="submit" className={style.send} title="Send">
                            {saving || addingCommentToPost ? <Loader height={17} width={17} /> : (
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={18}
                                    width={18}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className={style.path}
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        stroke="#ffffff"
                                        d="M12 5L12 20"
                                    />
                                    <path
                                        className={style.path}
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        stroke="#ffffff"
                                        d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CommentForm