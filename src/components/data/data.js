import nextId  from "react-id-generator";
let allTasks = [
    {
      id: nextId(),
      title: 'Hello',
      body: '1111',
      checked: false
    },
    {
      id: nextId(),
      title: 'By',
      body: '2222',
      checked: false
    }
  ]


 export function getData(newArr){
    if (newArr) {
        allTasks = newArr; 
      }
      const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : allTasks;
  
  }