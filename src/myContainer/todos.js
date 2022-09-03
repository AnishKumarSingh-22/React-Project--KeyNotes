import React from 'react'
import { TodoItem } from './todoItem'
 

  const Todos = (props) =>{
  return (
    <div className="Container">
    <h3 className="text-center my-3">Todos List</h3>
   {props.list1.length===0 ? "No todo list":
    <>{props.list1.map((todo)=>{
      return <TodoItem mytodo={todo} key={todo.sno} Delete={props.onDelete}/> 
    })}</>
    }
    </div>
  )
}
export{Todos}
