import React from 'react';
import style from './Title.module.scss'

const Title = ({text}) => {
    return (
        <div className={style.wrapper}>
                <span>{text}</span>
        </div>
    );
}

export default Title;
