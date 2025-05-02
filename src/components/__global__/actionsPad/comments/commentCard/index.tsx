import style from './style.module.css'

const CommentCard = () => {
    return (
        <div className={style.comment__container}>
            <div className={style.user}>
                <div className={style.user__pic}>
                    <svg
                        className={style.svg}
                        fill="none"
                        viewBox="0 0 24 24"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className={style.path}
                            strokeLinejoin="round"
                            fill="#707277"
                            strokeLinecap="round"
                            strokeWidth={2}
                            stroke="#707277"
                            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                        />
                        <path
                            className={style.path}
                            strokeWidth={2}
                            fill="#707277"
                            stroke="#707277"
                            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                        />
                    </svg>
                </div>
                <div className={style.user__info}>
                    <span className={style.span}>Yassine Zanina</span>
                    <p className={style.p}>Wednesday, March 13th at 2:45pm</p>
                </div>
            </div>
            <p className={style.comment__content}>
                I've been using this product for a few days now and I'm really
                impressed! The interface is intuitive and easy to use, and the
                features are exactly what I need to streamline my workflow.
            </p>
        </div>
    )
}

export default CommentCard