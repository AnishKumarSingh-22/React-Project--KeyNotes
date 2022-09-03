import React from 'react'
import { useState } from 'react'

export const Addtodo = (props) => {
    const [title, setTitle]=useState("")
    const [desc, setDesc]=useState("")
    const submit=(e)=>{
        e.preventDefault()
        if(!title || !desc ){
            alert("Title or description can not be blank")   
        }
        else{
        props.addTodo(title, desc)
        }

        setTitle('')
        setDesc('')
    }
  return (
    <><h3 style={{textAlign:'center'}}>Add a Todo</h3>
    <form onSubmit={submit} >
  <div style={{marginLeft:'42%'}}>
    <label>Title:</label>
    <input type="text" value={title} onChange ={(e)=>{setTitle(e.target.value)}}placeholder="Enter your title"/>
  </div>
  <div style={{marginLeft:'38.6%'}}>
    <label>Description:</label>
    <input type="text" value={desc} onChange ={(e)=>{setDesc(e.target.value)}} placeholder="Describe your todo"/>
  </div>
  <button type="submit" style={{backgroundColor:'skyblue',marginLeft:'47.5%'}}>Add Todo</button>
</form>
</>

  )
}
