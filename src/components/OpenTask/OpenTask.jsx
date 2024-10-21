import React from 'react';
import { useParams } from 'react-router-dom';
import {getData} from '../data/data'

import style from './OpenTask.module.scss'

const OpenTask = () => {
    let id = useParams().taskId
    let task = getData().filter(task=>task.id === id ? task : null)
    console.log(task)
    return (
        <div className={style.wrapper}>
            <h2>Заголовок данной задачи: </h2>
                <p>{task[0].title}</p>
            <h3>Что нужно выполнить:</h3>
            <p> {task[0].body}</p>
        </div>
    );
}

export default OpenTask;
