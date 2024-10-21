import React,{useState} from "react";
import style from "./newTask.module.scss";
import nextId from "react-id-generator";



const NewTask = ({addTask,clearAll}) => {

  const [title, setTitle] = useState('');
  const [titleBody, setTitleBody] = useState('');
 

  function newTaskFunc(event){
    event.preventDefault()
    const task = {
      id: nextId(),
      title: title,
      body: titleBody,
      checked: false
    }
    addTask(task)
    setTitle('')
    setTitleBody('')
  }

  function clearAllinput(e){
    e.preventDefault()
    setTitle('')
    setTitleBody('')
  }

  return (
    <div className={style.wrapper}>
        <form action="">
            <div className={style.text}>
                <label htmlFor="">Task title</label>
                <input className={style.inputs} onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text"/>
            </div>
            <div className={style.text, style.mt2}>
                <label  htmlFor="">Task body</label>
                <textarea className={style.inputs} onChange={(e)=>{setTitleBody(e.target.value)}} value={titleBody} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={style.buttons}>
              <div cclassName={style.btns__left}>
                <button className={style.create} onClick={(event)=>{newTaskFunc(event)}} >Create task!</button>
                <button className={style.clear} onClick={clearAllinput} >Очистить</button>
              </div>
              <div className={style.btns__tight}>
                <button className={style.delete} onClick={clearAll}>Удалить все</button>
              </div>
            </div>
        </form>
    </div>
  );
};

export default NewTask;
