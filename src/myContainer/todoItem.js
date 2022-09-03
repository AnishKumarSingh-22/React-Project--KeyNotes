import React from 'react'
 

 
export const TodoItem = (props) => {
 return (
<>
<hr/>
<div className="container" style={{backgroundColor:'skyblue'}}>
<h3>Todo-Item : {props.mytodo.sno} </h3>
<h4>{props.mytodo.title} </h4>
<h5>{props.mytodo.desc} </h5>
<button style={{ border:"2px solid green", marginBottom:"7px"}}className="btn btn-danger btn-sm" onClick={()=>props.Delete(props.mytodo)}>Delete</button>
</div>
</>
 )
}
