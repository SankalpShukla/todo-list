import React from 'react'

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" class="check" checked={props.item.completed} />
            <p class="task">{props.item.text}</p>
            <hr className="rule" />
        </div>
    )
}

export default TodoItem;