import React, { ComponentProps } from 'react';
import style from './style.module.css';

interface AvatarPropsType extends ComponentProps<'div'> {
    dims?: number;
    img: React.ComponentProps<'img'>
}

const Avatar = ({ dims, img, className }: AvatarPropsType) => {
    return (
        <div className={`${className} ${style.avatr__container}`} style={{
            height: dims ?? 40,
            width: dims ?? 40
        }}>
            <img {...img} className={style.image} />
        </div>
    )
}

export default Avatar