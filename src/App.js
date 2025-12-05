
import './App.css';
import Todolist from './components/Todolist';
import {TodosContext} from './Context/TodosContext';

import { useState } from 'react';
import { v4 } from 'uuid';

const todoList = [
  {
    id: v4(),
    title: "Complete Python",
    details : "take the python certif from udemy",
    isCompleted:false,
  },
  {
    id: v4(),
    title: "Complete TypeScript",
    details : "take the Typscipt certif from udemy",
    isCompleted:false,
  },
  {
    id: v4(),
    title: "Complete docker",
    details : "take the docker certif from youtube",
    isCompleted:false,
  },
]


function App() {
    const [todos,setTodos]=useState(todoList);
  return (
    <div className="App" style={{display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#0F0F26',
    height:'100vh',}} >
      <TodosContext.Provider value={{todos, setTodos}}>
        <Todolist />
      </TodosContext.Provider>
          </div>
  );
}

export default App;
