import React , {Component} from "react"
import TodoItem from './TodoItem'
import todosData from './todosData' 
import './App.css'
class App extends Component{
  constructor(){
    super()
    this.state={todo:todosData}
  }
  render(){
  const todoItems= this.state.todo.map(item => <TodoItem key={item.id} item={item} />)
  return(
    <div className="todo-list">
      <h1 style={{textAlign:"center"}}>
        Todo List
      </h1>
      {todoItems}
    </div>
  )
  }
}

export default App;