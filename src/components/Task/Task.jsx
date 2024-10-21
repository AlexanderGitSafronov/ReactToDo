
import { Link } from 'react-router-dom';
import style from './Task.module.scss'

const Task = ({id,title,body,checked,removeTask,checkedTask}) => {
  console.log(id)
  
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{body}</p>
            <div className={style.wrapper__input} onClick={()=>{checkedTask(id)}}>
                <input  checked={checked}  type="checkbox"/>
                <label  htmlFor="">Завершено?</label>
            </div>
            <div className={style.btn}>
                <button onClick={()=>{removeTask(id)}}>Удалить</button>
                
                <Link  to={`/task/${id}`}><button className={style.btn__more}>Открыть</button></Link>
                
            </div>
        </div>
    );
}

export default Task;
