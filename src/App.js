import React from "react"
import TodoItem from './TodoItem'
import todosData from './todosData' 
import './App.css'

function App(){
  const todoItems= todosData.map(item => <TodoItem key={item.id} item={item} />)

  return(
    <div className="todo-list">
      <h1 style={{textAlign:"center"}}>
        Todo List
      </h1>
      {todoItems}
    </div>
  )

}

export default App;