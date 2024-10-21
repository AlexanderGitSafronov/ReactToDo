import NewTask from "./components/NewTask/NewTask";
import Task from "./components/Task/Task";
import Title from "./components/Title/Title";
import React,{useState} from 'react'
import nextId  from "react-id-generator";
import './App.scss'
import {getData} from './components/data/data'




function App() {
  // const allTasks = [
  //   {
  //     id: nextId(),
  //     title: 'Hello',
  //     body: '1111',
  //     checked: false
  //   },
  //   {
  //     id: nextId(),
  //     title: 'By',
  //     body: '2222',
  //     checked: false
  //   }
  // ]
  const [allTask, setAllTask] = useState(getData());

  function addTask(task){
    setAllTask((prev)=>{
      return [...prev, task]
    })
  }
  function removeTask(id){
    console.log(id)
    setAllTask((prev)=>{
      return prev.filter(task=>task.id !== id)
    })
  }

  function checkedTask(id){
    setAllTask((prev)=>{
      return prev.map(task=>task.id === id ? {...task, checked: !task.checked} : task)
    })
  }
  function clearAll(e){
    e.preventDefault()
    setAllTask((prev)=>{
      return []
    })
  }
  getData(allTask)
  

  return (
    <div className="App">
        <Title text={'Todo list'}/>
        <div className="wrapper__task">
        <NewTask clearAll={clearAll} addTask={addTask}/>
        <div className="all__task">
        {allTask.map(({id,title,body,checked})=>{
          return <Task key={id} id={id} title={title} body={body} checked={checked} checkedTask={checkedTask} removeTask={removeTask}/>
        })}
        </div>
       
        </div>
       
      
    </div>
  );
}

export default App;
